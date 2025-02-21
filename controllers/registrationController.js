 // registrationcontroller.js 
const { insertRegistration } = require("../models/registrationModel");
const { sendEmail } = require("../services/emailService");
const { generateUPIQRCode } = require("../services/qrCodeService");

const registerUser = async (req, res) => {
  try {
    const { name, college, department, year, mobile, email } = req.body;
    const totalAmount = 300; // Fixed amount for all participants

    // Insert registration into the database
    const registrationData = await insertRegistration({
      name,
      college,
      department,
      year,
      mobile,
      email,  // Allow same email multiple times
      totalAmount,
    });

    // Generate UPI QR Code
    const qrCodeURL = await generateUPIQRCode(name, totalAmount);

    // Send confirmation email
    await sendEmail(email, name, totalAmount, qrCodeURL);

    res.status(200).json({ message: "Registration successful", qrCodeURL });
  } catch (error) {
    if (error.code === "23505") {
      res.status(400).json({ message: "This email is already registered." });
    } else {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Error during registration" });
    }
  }
};

module.exports = { registerUser };
