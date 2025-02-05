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
      <p>💡 <strong>Note:</strong> All tech events are just <strong>₹300</strong> only to participate in all the tech events! 💻⚡</p>

      <h4>🔽 Scan the QR code below to complete your payment: 🔽</h4>

      <p>📞 For any doubts regarding payments, feel free to call <strong>Ragul 📲 9489949314</strong>.</p>
      <p>✅ Our team will send you a confirmation message once your payment is complete, and you'll be added to our exclusive WhatsApp group for updates! 📢💬</p>

      <p>Best Regards,<br>💡 The ELECTRYONZ Team 💡</p>
    </div>
  `,
};


  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
