// emailService.js
const nodemailer = require("nodemailer");

const sendEmail = async (email, name, totalAmount, qrCodeURL) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "🎉 Event Registration Confirmation - ELECTRYONZ 2025 🎉",
    html: `<div style="text-align: center; font-family: Arial, sans-serif;">
      <h3>Hi ${name}, 👋</h3>
      <p>🚀 <strong>WELCOME TO ELECTRYONZ 2025</strong>! 🚀</p>
      <p>🎯 You have successfully registered! Your total payment amount is <strong>₹${totalAmount}</strong>.</p>
      <h4>🔽 Scan the QR code below to complete your payment: 🔽</h4>
      <img src="${qrCodeURL}" alt="QR Code" style="width:200px; height:200px;" />
      <p>📞 Contact Ragul at <strong>9489949314</strong> for payment-related queries.</p>
      <p>✅ You'll receive a confirmation once your payment is complete.</p>
    </div>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
