const Student = require("../models/Student");

const addStudent = async (req, res) => {
    try {
        const {
            name,
            usn,
            semester,
            division,
            gender,
            phone,
            email
        } = req.body;

        const student = new Student({
            name,
            usn,
            semester,
            division,
            gender,
            phone,
            email
        });

        const savedStudent = await student.save();

        res.status(201).json({
            message: "Student registered successfully",
            student: savedStudent
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to register student",
            error: error.message
        });
    }
};



const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            message: "Students fetched successfully",
            students: students
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch students",
            error: error.message
        });
    }
};


const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student updated successfully",
            student: updatedStudent
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update student",
            error: error.message
        });
    }
};


const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete student",
            error: error.message
        });
    }
};

module.exports = {
    addStudent,
    getStudents,
    updateStudent,
    deleteStudent
};