const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        usn: { type: String, required: true, unique: true },
        semester: { type: Number, required: true },
        division: { type: String, required: true },
        gender: { type: String, enum: ["Male", "Female"], required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);