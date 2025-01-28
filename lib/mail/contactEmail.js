import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "sohanthink@gmail.com",
    pass: "jbykfnzyhchxxzqy",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function contactEmail(name, email, message) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"embeddedExpert/Contact" <sohanthink@gmail.com>`, // sender address
    to: "sohanthink@gmail.com", // list of receivers
    subject: "New Contact Message", // Subject line
    text: `You have received a new message from ${name} (${email}):\n\n${message}`, // plain text body
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">${message}</p>
        <hr style="border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 0.9em; color: #555;">This email was sent from the contact form on embeddedExpert.</p>
      </div>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default contactEmail;
