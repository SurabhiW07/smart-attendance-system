const express = require("express");

const router = express.Router();

const {
    addFaculty,
    getFaculties,
    updateFaculty,
    deleteFaculty
} = require("../controllers/facultyController");


// Add Faculty
router.post("/", addFaculty);

// View Faculties
router.get("/", getFaculties);

// Edit Faculty
router.put("/:id", updateFaculty);

// Delete Faculty
router.delete("/:id", deleteFaculty);


module.exports = router;