// models/registrationModel.js
const supabase = require("../config/supabase");

// Insert a new registration
const insertRegistration = async (data) => {
  const { name, college, department, year, mobile, email, totalAmount } = data;

  // Insert data into the registrations table
  const { data: newRegistration, error } = await supabase
    .from("registrations") // Make sure the table name matches exactly in Supabase
    .insert([
      {
        name,
        college,
        department,
        year,
        mobile,
        email,
        total_amount: totalAmount,
        payment_status: "Pending",
      },
    ])
    .single();

  if (error) {
    console.error("Error inserting registration:", error.message);
    throw error;
  }

  return newRegistration; // Return the newly inserted registration record
};

module.exports = { insertRegistration };
