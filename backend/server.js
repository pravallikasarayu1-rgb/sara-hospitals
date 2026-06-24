const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// Routes
const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");


app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);


// Home
app.get("/", (req, res) => {
    res.send("SARA Hospitals Backend Running");
});


// MongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((error) => {
    console.log("MongoDB Connection Error:");
    console.log(error.message);
});


// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});