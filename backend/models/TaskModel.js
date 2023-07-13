const mongoose = require("mongoose");

const taskSchemas = new mongoose.Schema({
  tasks: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchemas);
