const express = require("express");
const router = express.Router();

const Patient = require("../models/Patient");

console.log("Patient route file loaded");


// TEST ROUTE
router.get("/test", (req, res) => {
    res.send("Patient route working");
});


// ADD PATIENT
router.post("/add", async (req, res) => {

    try {

        const patient = new Patient(req.body);

        await patient.save();

        res.status(201).json({
            message: "Patient details saved successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// GET ALL PATIENTS
router.get("/all", async (req, res) => {

    try {

        const patients = await Patient.find();

        res.status(200).json(patients);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


module.exports = router;