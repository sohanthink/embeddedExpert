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
async function subscribeEmail(email) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"embeddedExpert/New Subscription" <${process.env.EMAIL_USER}>`, // sender address
    to: process.env.EMAIL_USER, // list of receivers
    subject: "New Email Subscription", // Subject line
    text: `You have received a new email subscription from: ${email}`, // plain text body
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">New Email Subscription</h2>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Subscription Date:</strong> ${new Date().toLocaleDateString()}</p>
        <hr style="border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 0.9em; color: #555;">This email was sent from the subscription form on embeddedExpert.</p>
        <p style="font-size: 0.9em; color: #555;">The subscriber will now receive updates about new courses, expert tips, and exclusive offers.</p>
      </div>
    `, // html body
  });

  console.log("Subscription email sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default subscribeEmail;
