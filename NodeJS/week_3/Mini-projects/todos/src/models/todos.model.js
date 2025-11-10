const mongoose = require('mongoose');

const todoShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    dueDate: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

const todo = mongoose.model("Todo", todoShema);

module.exports = todo;