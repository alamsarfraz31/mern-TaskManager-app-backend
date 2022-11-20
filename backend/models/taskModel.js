const mongoose = require("mongoose");

const taskSChema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter Data"]
        },
        complete: {
            type: Boolean,
            require: true,
            default: false
        },
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model("Task", taskSChema);
module.exports = Task