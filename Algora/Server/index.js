const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const quizResultRouter = require('./routes/quizResults');
const connectMongo = require('./connection');
const app = express();
const port = process.env.PORT || 5005;
const url = "mongodb://localhost:27017/quiz";
const User = require('./models/userModel');
const mongoose = require('mongoose');

// Connect to MongoDB
connectMongo(url);

app.use(bodyParser.json());
app.use(cors());

// Use the quizResults router
app.use('/quizResults', quizResultRouter);

app.post('/users/create', async (req, res) => {
  const { name, userid, email, literacyQuizScore, courseType } = req.body;
  try {
    const newUser = await User.create({
      name,
      userid,
      email,
      literacyQuizScore,
      courseType
    });
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});


app.get('/user-literacy/:userid', async (req, res) => {
  const { userid } = req.params;
  try {
    const user = await User.findOne({ userid });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
    console.log(user);
  } catch (error){
    res.status(500).json({ message: 'Error retrieving user', error });
  } });






app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
