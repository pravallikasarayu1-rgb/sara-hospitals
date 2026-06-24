const express = require("express");
const router = express.Router();

const Doctor = require("../models/Doctor");


// Add doctor
router.post("/add", async (req, res) => {

    try {

        const doctor = new Doctor(req.body);

        await doctor.save();

        res.json({
            message: "Doctor added successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// Get all doctors
router.get("/all", async (req, res) => {

    try {

        const doctors = await Doctor.find();

        res.json(doctors);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


module.exports = router;