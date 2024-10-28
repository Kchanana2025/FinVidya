const QuizResult = require('../models/quizResult');

async function handleQuizResult(userId, score, responses) {
  let personalityType;
  let redirectUrl;

  if (score >= 12 && score <= 20) {
    personalityType = 'Defensive Investor';
    redirectUrl = 'defensive-investor/';
  } else if (score >= 21 && score <= 32) {
    personalityType = 'Income Investor';
    redirectUrl = 'income-investor/';
  } else if (score >= 33 && score <= 44) {
    personalityType = 'Growth Investor';
    redirectUrl = 'growth-investor/';
  } else if (score >= 45 && score <= 48) {
    personalityType = 'Aggressive Investor';
    redirectUrl = 'aggressive-investor/';
  }

  const quizResult = new QuizResult({ userId, score, personalityType, redirectUrl, responses });
  await quizResult.save();

  return { personalityType };
}

async function getQuizResult(req, res) {
  const { userId } = req.params;
  try {
    const quizResult = await QuizResult.find({ userId });
    res.send(quizResult);
  } catch (error) {
    console.error('Error fetching quiz result:', error);
    res.status(500).send('Internal Server Error');
  }
}

async function getQuizResponses(req, res) {
  const { userId } = req.params;
  try {
    const quizResults = await QuizResult.find({ userId });
    const responses = quizResults.map(result => result.responses);
    res.send(responses);
  } catch (error) {
    console.error('Error fetching quiz responses:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { handleQuizResult, getQuizResult, getQuizResponses };
