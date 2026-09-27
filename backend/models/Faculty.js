const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        facultyId: {
            type: String,
            required: true,
            unique: true
        },

        email: {
            type: String,
            required: true
        },

        subject: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Faculty", facultySchema);