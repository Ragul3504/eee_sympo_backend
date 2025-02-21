const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const registrationRoutes = require("./routes/registrationRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/register", registrationRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
