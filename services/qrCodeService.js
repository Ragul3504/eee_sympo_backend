// qrCodeService.js
const QRCode = require("qrcode");

const generateUPIQRCode = async (name, amount) => {
  const upiID = process.env.UPI_ID || "ragulas3504@oksbi";
  const upiString = `upi://pay?pa=${upiID}&pn=${name}&am=${amount}&cu=INR`;
  return await QRCode.toDataURL(upiString);
};

module.exports = { generateUPIQRCode };
