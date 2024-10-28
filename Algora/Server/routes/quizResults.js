// const express = require('express');
// const router = express.Router();
// const QuizResult = require('../models/quizResult');
// const {handleQuizResult, getQuizResult} = require('../controllers/quizResults');

// router.post('/save', handleQuizResult);

// router.get('/:userId', getQuizResult);


// module.exports = router

const express = require('express');
const router = express.Router();
const { handleQuizResult, getQuizResult, getQuizResponses } = require('../controllers/quizResults');

router.post('/save', async (req, res) => {
  try {
    const { userId, score, responses } = req.body;
    const result = await handleQuizResult(userId, score, responses);
    res.send(result);
  } catch (error) {
    console.error('Error saving quiz result:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:userId', getQuizResult);


router.get('/:userId/responses', getQuizResponses);


module.exports = router;

