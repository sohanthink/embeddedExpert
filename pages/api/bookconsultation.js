import BookConsultation from "../../models/BookConsultation.js";
import sequelize from "../../lib/sequelize.js";
import bookConsultationEmail from "../../lib/mail/bookConsultationEmail.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, company, teamSize, goals } = req.body;

    // Validate required fields
    if (!name || !company || !teamSize || !goals) {
      return res.status(400).json({
        message: "All fields are required",
        errors: {
          name: !name ? "Name is required" : null,
          company: !company ? "Company is required" : null,
          teamSize: !teamSize ? "Team size is required" : null,
          goals: !goals ? "Goals are required" : null,
        },
      });
    }

    // Create new book consultation record
    const consultation = await BookConsultation.create({
      name: name.trim(),
      company: company.trim(),
      teamSize: teamSize.trim(),
      goals: goals.trim(),
    });

    // Send email notification
    try {
      await bookConsultationEmail(
        name.trim(),
        company.trim(),
        teamSize.trim(),
        goals.trim()
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the request if email fails, just log it
    }

    // Send success response
    return res.status(201).json({
      message: "Book consultation inquiry submitted successfully",
      data: {
        id: consultation.id,
        name: consultation.name,
        company: consultation.company,
        teamSize: consultation.teamSize,
        goals: consultation.goals,
        createdAt: consultation.createdAt,
      },
    });
  } catch (error) {
    console.error("Error in book consultation API:", error);

    // Handle Sequelize validation errors
    if (error.name === "SequelizeValidationError") {
      const validationErrors = {};
      error.errors.forEach((err) => {
        validationErrors[err.path] = err.message;
      });

      return res.status(400).json({
        message: "Validation failed",
        errors: validationErrors,
      });
    }

    // Handle database connection errors
    if (
      error.name === "SequelizeConnectionError" ||
      error.name === "SequelizeHostNotFoundError"
    ) {
      return res.status(503).json({
        message: "Database connection error. Please try again later.",
      });
    }

    // Generic error response
    return res.status(500).json({
      message: "Internal server error. Please try again later.",
    });
  }
}
