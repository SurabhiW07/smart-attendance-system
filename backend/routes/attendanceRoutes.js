const express = require("express");

const router = express.Router();

const {
    markAttendance,
    getAttendance,
    updateAttendance,
    getLowAttendance
} = require("../controllers/attendanceController");


// Mark Attendance
router.post("/", markAttendance);

// View Attendance
router.get("/", getAttendance);

// Low Attendance Alert
router.get("/low", getLowAttendance);

// Edit Attendance
router.put("/:id", updateAttendance);


module.exports = router;