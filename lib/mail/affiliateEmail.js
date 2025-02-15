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
async function affiliateEmail(affiliate) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"embeddedExpert/Affiliate" <sohanthink@gmail.com>`, // sender address
    to: "sohanthink@gmail.com", // list of receivers
    subject: "New Affiliate Message", // Subject line
    text: `You have received a new Affiliate request from ${affiliate.name} (${affiliate.email}):\n\n${affiliate.courseType}`, // plain text body
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">New affiliate Message</h2>
        <p><strong>Name:</strong> ${affiliate.name}</p>
        <p><strong>Email:</strong> ${affiliate.email}</p>
        <p><strong>Phone:</strong> ${affiliate.phone}</p>
        <p><strong>Affiliate Category:</strong></p>
        <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd;">${affiliate.courseType}</p>
        <hr style="border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 0.9em; color: #555;">This email was sent from the affiliate form on embeddedExpert.</p>
      </div>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default affiliateEmail;
