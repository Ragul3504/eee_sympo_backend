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
    html: `
      <div style="text-align: center; font-family: Arial, sans-serif;">
        <h3>Hi ${name}, 👋</h3>
        <p>🚀 <strong>WELCOME TO ELECTRYONZ 2025</strong>! 🚀</p>
        <p>🎯 You have successfully registered for our event! Your total payment amount is <strong>₹${totalAmount}</strong>.</p>
        <h4>🔽 Scan the QR code below to complete your payment: 🔽</h4>
        <img src="${qrCodeURL}" alt="UPI QR Code" style="width: 250px; border-radius: 10px;" />
        <p>Best Regards,<br>💡 The ELECTRYONZ Team 💡</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
