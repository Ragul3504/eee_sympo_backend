// registrationController.js
const { insertRegistration } = require("../models/registrationModel");
const { sendEmail } = require("../services/emailService");
const { generateUPIQRCode } = require("../services/qrCodeService");

const registerUser = async (req, res) => {
  try {
    const { name, college, department, year, mobile, email, eventType, teamSize } = req.body;
    let totalAmount = 300; // Default for solo events

    if (eventType === "team") {
      totalAmount = 300; // Fixed ₹300 per team
    }

    const registrationData = await insertRegistration({
      name,
      college,
      department,
      year,
      mobile,
      email,
      eventType,
      teamSize,
      totalAmount,
    });

    const qrCodeURL = await generateUPIQRCode(name, totalAmount);
    await sendEmail(email, name, totalAmount, qrCodeURL);

    res.status(200).json({ message: "Registration successful", qrCodeURL });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Error during registration" });
  }
};

module.exports = { registerUser };
