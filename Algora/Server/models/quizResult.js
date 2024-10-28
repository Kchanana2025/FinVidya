const mongoose = require('mongoose');

const QuizResultSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  score: { type: Number, required: true },
  personalityType: { type: String, required: true },
  redirectUrl: { type: String, required: true },
  responses: { type: Array, required: true }
});

module.exports = mongoose.model('QuizResult', QuizResultSchema);
