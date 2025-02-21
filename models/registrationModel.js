// registrationModel.js
const supabase = require("../config/supabase");

const insertRegistration = async (data) => {
  const { name, college, department, year, mobile, email, eventType, teamSize, totalAmount } = data;

  const { data: newRegistration, error } = await supabase
    .from("registrations")
    .insert([
      { name, college, department, year, mobile, email, eventType, teamSize, total_amount: totalAmount, payment_status: "Pending" },
    ])
    .single();

  if (error) {
    console.error("Error inserting registration:", error.message);
    throw error;
  }

  return newRegistration;
};

module.exports = { insertRegistration };
