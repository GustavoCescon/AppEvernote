const mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
  title: String,
  body: Stryng,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Note", noteSchema);
