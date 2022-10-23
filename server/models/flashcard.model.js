const mongoose = require('mongoose');
const FlashcardSchema = new mongoose.Schema({
  word: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must have at least 3 characters."]
  },
  type: {
    type: String,
    required: [true, "Type is required"],
    minlength: [3, "Type must have at least 3 characters."]
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [3, "Description must have at least 3 characters."]
  }
}, {timestamps: true} );

module.exports = mongoose.model('Flashcard', FlashcardSchema);