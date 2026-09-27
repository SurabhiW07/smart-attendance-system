const Attendance = require("../models/Attendance");


// Mark Attendance
const markAttendance = async (req, res) => {
    try {
        const { studentId, facultyId, subject, date, status } = req.body;

        const attendance = new Attendance({
            studentId,
            facultyId,
            subject,
            date,
            status
        });

        const savedAttendance = await attendance.save();

        res.status(201).json({
            message: "Attendance marked successfully",
            attendance: savedAttendance
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to mark attendance",
            error: error.message
        });
    }
};

//view attendance
const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find()
            .populate("studentId")
            .populate("facultyId");

        // Remove records whose student or faculty no longer exists
        const validAttendance = attendance.filter(
            record => record.studentId && record.facultyId
        );

        res.status(200).json({
            message: "Attendance fetched successfully",
            attendance: validAttendance
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch attendance",
            error: error.message
        });
    }
};


// Edit Attendance
const updateAttendance = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedAttendance = await Attendance.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedAttendance) {
            return res.status(404).json({
                message: "Attendance record not found"
            });
        }

        res.status(200).json({
            message: "Attendance updated successfully",
            attendance: updatedAttendance
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update attendance",
            error: error.message
        });
    }
};



// Low Attendance Alert - Subject Wise
const getLowAttendance = async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find()
            .populate("studentId");

        const studentAttendance = {};
attendanceRecords
    .filter(record => record.studentId)
    .forEach((record) => {

        const studentId = record.studentId._id.toString();
        const subject = record.subject;

        const key = `${studentId}_${subject}`;

        if (!studentAttendance[key]) {
            studentAttendance[key] = {
                student: record.studentId,
                subject: subject,
                total: 0,
                present: 0
            };
        }

        studentAttendance[key].total++;

        if (record.status === "Present") {
            studentAttendance[key].present++;
        }
    });

        const lowAttendanceStudents = [];

        Object.values(studentAttendance).forEach((student) => {

            const percentage =
                (student.present / student.total) * 100;

            if (percentage < 75) {

                lowAttendanceStudents.push({
                    student: student.student,
                    subject: student.subject,
                    totalAttendance: student.total,
                    present: student.present,
                    attendancePercentage: percentage
                });
            }
        });

        res.status(200).json({
            message: "Low attendance students fetched successfully",
            lowAttendanceStudents: lowAttendanceStudents
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch low attendance students",
            error: error.message
        });
    }
};

module.exports = {
    markAttendance,
    getAttendance,
    updateAttendance,
    getLowAttendance
    
};