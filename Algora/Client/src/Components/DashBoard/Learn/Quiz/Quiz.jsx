import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const quizQuestions = [
  {
    question: "What is the purpose of a budget?",
    options: ["To keep track of expenses and income", "To minimize debt", "To increase savings", "All of the above"],
    correctAnswer: 3
  },
  {
    question: "What is interest?",
    options: ["A fee paid for borrowing money", "The cost of a service", "A discount on a product", "A type of investment"],
    correctAnswer: 0
  },
  {
    question: "What is inflation?",
    options: ["A decrease in the price of goods and services", "An increase in the price of goods and services", "An increase in the value of money", "A decrease in the value of money"],
    correctAnswer: 1
  },
  {
    question: "What does it mean to have a diversified investment portfolio?",
    options: ["Investing all money in one type of asset", "Spreading investments across different types of assets", "Keeping money in a savings account", "Investing only in bonds"],
    correctAnswer: 1
  },
  {
    question: "How much of your income should you ideally save for emergencies?",
    options: ["1-2%", "3-5%", "10-15%", "20-30%"],
    correctAnswer: 2
  },
  {
    question: "What is the purpose of an emergency fund?",
    options: ["To cover unexpected expenses", "To invest in stocks", "To pay off credit card debt", "To buy luxury items"],
    correctAnswer: 0
  },
  {
    question: "What is a credit score?",
    options: ["A measure of your ability to save", "A record of your borrowing and repayment history", "The interest rate on a loan", "The amount of money you owe"],
    correctAnswer: 1
  },
  {
    question: "How can you improve your credit score?",
    options: ["Making timely payments", "Closing unused credit accounts", "Maximizing the use of your credit limit", "Avoiding loans altogether"],
    correctAnswer: 0
  },
  {
    question: "What is a mutual fund?",
    options: ["A savings account with a bank", "A type of insurance policy", "An investment vehicle that pools money from multiple investors to buy securities", "A retirement account"],
    correctAnswer: 2
  },
  {
    question: "What is the stock market?",
    options: ["A place where people buy groceries", "A market for buying and selling company shares", "A type of savings account", "A place where government bonds are traded"],
    correctAnswer: 1
  },
  {
    question: "What is a bond?",
    options: ["A share in a company", "A loan made to a company or government", "An insurance policy", "A type of credit card"],
    correctAnswer: 1
  },
  {
    question: "What is a pension plan?",
    options: ["A savings account for buying a house", "An investment plan for retirement", "A loan for starting a business", "A type of insurance policy"],
    correctAnswer: 1
  },
  {
    question: "How often do you seek information or resources to enhance your financial knowledge?",
    options: ["Regularly (monthly)", "Occasionally (a few times a year)", "Rarely (once a year or less)", "Never"],
    correctAnswer: null 
  }
];

const Quiz = () => {
    const { user } = useUser();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
  
    useEffect(() => {
      if (showResults) {
        saveUser(score);
      }
    }, [showResults]);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setShowResults(true);
      }
    };
  
    const saveUser = async (finalScore) => {
      if (!user) return;
  
      const userData = {
        name: user.fullName,
        userid: user.id,
        email: user.primaryEmailAddress.emailAddress,
        literacyQuizScore: finalScore,
        courseType: finalScore <= 5 ? 'Beginner' : finalScore <= 10 ? 'Intermediate' : 'Advanced',
      };
  
      try {
        const response = await axios.post('http://localhost:5005/users/create', userData);
        console.log('User saved:', response.data);
      } catch (error) {
        console.error('Error saving user:', error);
      }
    };
  
    return (
      <div className="bg-theme-light min-h-screen flex items-center justify-center">
        <div className="quiz-container container flex-col mx-auto bg-white w-3/5 h-4/5 px-6 py-5 rounded-xl border-slate-900 border-2 overflow-hidden">
          {showResults ? (
            <div className="bg-white p-8 rounded shadow-md text-center">
              <Navigate to={`/dashboard/learn/`} />
            </div>
          ) : (
            <div className="quiz-header">
              <h2
                id="question"
                className="flex justify-center font-body mb-2 font-semibold rounded-xl border-2 border-slate-900 py-4 text-2xl whitespace-normal break-words"
              >
                {quizQuestions[currentQuestionIndex].question}
              </h2>
              <ul>
                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                  <li
                    key={index}
                    className="flex px-4 mt-3 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500"
                  >
                    <button
                      onClick={() => handleAnswerOptionClick(index === quizQuestions[currentQuestionIndex].correctAnswer)}
                      className="w-full text-left"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Quiz;