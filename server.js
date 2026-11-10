const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");
app.use("/api/v1/students", studentRoutes);


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student API is working"
  });
});


const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server failed to start");
  }
};
startServer();