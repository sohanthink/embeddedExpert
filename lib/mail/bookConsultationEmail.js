import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function bookConsultationEmail(name, company, teamSize, goals) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"embeddedExpert/Book Consultation" <${process.env.EMAIL_USER}>`, // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: "New Book Consultation Request", // Subject line
    text: `You have received a new book consultation request from ${name} at ${company}.\n\nTeam Size: ${teamSize}\nGoals: ${goals}`, // plain text body
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">New Book Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Team Size:</strong> ${teamSize}</p>
        <p><strong>Goals:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">${goals}</p>
        <hr style="border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 0.9em; color: #555;">This email was sent from the book consultation form on embeddedExpert.</p>
      </div>
    `, // html body
  });

  console.log("Book consultation email sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default bookConsultationEmail;
