const Faculty = require("../models/Faculty");


// Add Faculty
const addFaculty = async (req, res) => {
    try {
        const { name, facultyId, email, subject } = req.body;

        const faculty = new Faculty({
            name,
            facultyId,
            email,
            subject
        });

        const savedFaculty = await faculty.save();

        res.status(201).json({
            message: "Faculty added successfully",
            faculty: savedFaculty
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to add faculty",
            error: error.message
        });
    }
};


// View Faculty
const getFaculties = async (req, res) => {
    try {
        const faculties = await Faculty.find();

        res.status(200).json({
            message: "Faculties fetched successfully",
            faculties: faculties
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch faculties",
            error: error.message
        });
    }
};


// Edit Faculty
const updateFaculty = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedFaculty = await Faculty.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedFaculty) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.status(200).json({
            message: "Faculty updated successfully",
            faculty: updatedFaculty
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update faculty",
            error: error.message
        });
    }
};


// Delete Faculty
const deleteFaculty = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedFaculty = await Faculty.findByIdAndDelete(id);

        if (!deletedFaculty) {
            return res.status(404).json({
                message: "Faculty not found"
            });
        }

        res.status(200).json({
            message: "Faculty deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete faculty",
            error: error.message
        });
    }
};


module.exports = {
    addFaculty,
    getFaculties,
    updateFaculty,
    deleteFaculty
};