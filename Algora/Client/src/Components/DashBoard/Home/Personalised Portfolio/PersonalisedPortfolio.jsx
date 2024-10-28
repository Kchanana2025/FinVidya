// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "@clerk/clerk-react";
// import axios from "axios";
// import './Quiz.css'

// const questions = [
//   {
//     question: 'How much is your net worth?',
//     options: [
//       { label: 'Having only liabilities (-ve net worth)', value: 1 },
//       { label: 'Up to 12 times monthly expenses', value: 2 },
//       { label: '13–36 times of monthly expenses', value: 3 },
//       { label: '37–48 times of monthly expenses', value: 4 },
//       { label: '49–60 times of the monthly expenses', value: 5 },
//     ],
//   },
//   {
//     question: 'How much do you save of your monthly income?',
//     options: [
//       { label: 'Upto 5%', value: 1 },
//       { label: '6 - 15%', value: 2 },
//       { label: '16 - 25%', value: 3 },
//       { label: '26 - 50%', value: 4 },
//       { label: '51 - 75%', value: 5 },
//     ],
//   },
//   {
//     question: 'How many people are dependent on your income?',
//     options: [
//       { label: 'No dependency', value: 1 },
//       { label: '1 dependent', value: 2 },
//       { label: '2 dependent', value: 3 },
//       { label: '3 dependent', value: 4 },
//       { label: '4 or more', value: 5 },
//     ],
//   },
//   {
//     question: 'What is the consistency of your job and your income?',
//     options: [
//       { label: 'High (satisfied with job not gonna lose job)', value: 5 },
//       { label: 'Moderate (unsatisfied / uncertain about job)', value: 3 },
//       { label: 'Low (fear of losing job)', value: 1 },
//     ],
//   },
//   {
//     question: 'What is your current age?',
//     options: [],
//     inputType: 'numeric',
//   },
//   {
//     question: 'At what age are you planning to retire?',
//     options: [],
//     inputType: 'numeric',
//   },
//   {
//     question: 'How long will you keep investing?',
//     options: [
//       { label: '1 - 2 years', value: 1 },
//       { label: '3 - 5 years', value: 2 },
//       { label: '5 - 7 years', value: 3 },
//       { label: '7+ years', value: 4 },
//     ],
//   },
//   {
//     question: 'What is the intent of the portfolio?',
//     options: [
//       { label: 'Generate income for today', value: 1 },
//       { label: 'Generate income for later date', value: 2 },
//       { label: 'To provide for my dependents (I will not be using these funds)', value: 3 },
//       { label: 'To fund a large event in the future', value: 4 },
//     ],
//   },
//   {
//     question: 'What is the primary objective of your portfolio?',
//     options: [
//       { label: 'To prioritize security', value: 1 },
//       { label: 'To aim for steady growth and avoiding fluctuation', value: 2 },
//       { label: 'To balance between growth and security and keep up with inflation', value: 3 },
//       { label: 'To focus on growth potential and accept some fluctuations in returns', value: 4 },
//       { label: 'To solely pursue long term growth', value: 5 },
//     ],
//   },
//   {
//     question: 'What is your level of expertise in the stock market?',
//     options: [
//       { label: 'No knowledge (First time investor)', value: 1 },
//       { label: 'Beginner Level (Already an investor / basic knowledge)', value: 2 },
//       { label: 'Intermediate Level (good understanding of market)', value: 3 },
//       { label: 'Expert Level (Investing in market for more than 3 years)', value: 4 },
//       { label: 'Professional Level (investing in market for more than 5 years)', value: 5 },
//     ],
//   },
//   {
//     question: 'Consider an investment of 2 lakhs, how much fall can you tolerate in one month?',
//     options: [
//       { label: '0 - 5% OR Rs.10,000', value: 1 },
//       { label: '6 - 10% OR Rs.10,000 to 20,000', value: 2 },
//       { label: '11 - 20% OR Rs.20,000 to 40,000', value: 3 },
//       { label: '21 - 30% OR Rs.40,000 to 60,000', value: 4 },
//       { label: 'More than 30% or Rs.60,000', value: 5 },
//     ],
//   },
//   {
//     question: 'What is the maximum amount of time for which you can tolerate loss?',
//     options: [
//       { label: 'Less than 3 months', value: 1 },
//       { label: 'Between 4 months to 1 year', value: 2 },
//       { label: 'Between 1 - 2 years', value: 3 },
//       { label: 'Between 2 - 3 years', value: 4 },
//       { label: 'Between 3 - 5 years', value: 5 },
//     ],
//   },
// ];


// const Quiz = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [answers, setAnswers] = useState({});
//     const [totalScore, setTotalScore] = useState(0);
//     const [showFinalScore, setShowFinalScore] = useState(false);
//     const [workDur, setWorkDurAdded] = useState(false);
//     const navigate = useNavigate(); 
  
//     const handleOptionChange = (optionIndex) => {
//       setAnswers((prevAnswers) => {
//         const newAnswers = { ...prevAnswers };
//         newAnswers[currentQuestion] = optionIndex;
//         return newAnswers;
//       });
//     };
  
//     const handleNumericInput = (event) => {
//       const numericValue = parseInt(event.target.value, 10);
//       setAnswers((prevAnswers) => {
//         const newAnswers = { ...prevAnswers };
//         newAnswers[currentQuestion] = numericValue;
//         return newAnswers;
//       });
//     };
  
//     const calculateTotalScore = async () => {
//       let calculatedScore = 0;
//       questions.forEach((question, questionIndex) => {
//         const selectedOptionIndex = answers[questionIndex];
//         if (
//           selectedOptionIndex !== undefined &&
//           question.options &&
//           question.options[selectedOptionIndex]
//         ) {
//           calculatedScore += question.options[selectedOptionIndex].value;
//         }
//       });
  
//       const currentAge = answers[4];
//       const retirementAge = answers[5];
  
//       if (currentAge !== undefined && retirementAge !== undefined && !workDur) {
//         const totalWorkingYears = retirementAge - currentAge;
  
//         if (totalWorkingYears > 30) {
//           calculatedScore += 6;
//           setWorkDurAdded(true);
//         } else if (totalWorkingYears >= 25 && totalWorkingYears < 30) {
//           calculatedScore += 5;
//           setWorkDurAdded(true);
//         } else if (totalWorkingYears >= 20 && totalWorkingYears < 25) {
//           calculatedScore += 4;
//           setWorkDurAdded(true);
//         } else if (totalWorkingYears >= 15 && totalWorkingYears < 20) {
//           calculatedScore += 3;
//           setWorkDurAdded(true);
//         } else if (totalWorkingYears < 15) {
//           calculatedScore += 1;
//           setWorkDurAdded(true);
//         }
//       }
  
//       setTotalScore(calculatedScore);
  
    
//       try {
        
//         const userId =  user.id; 
//         const response = await axios.post('http://localhost:5000/quizResults/save', { userId, score: calculatedScore });
//         const personalityType = response.data.personalityType;

//         if (personalityType === 'Defensive Investor') {
//           navigate('/dashboard/defensive-investor');
//         } else if (personalityType === 'Income Investor') {
//           navigate('/dashboard/income-investor');
//         } else if (personalityType === 'Growth Investor') {
//           navigate('/dashboard/growth-investor');
//         } else if (personalityType === 'Aggressive Investor') {
//           navigate('/dashboard/aggressive-investor');
//         }
//       } catch (error) {
//         console.error('Error saving quiz result:', error);
//       }
  
//       setShowFinalScore(true);
//     };
  
//     const handleNext = () => {
//       if (answers[currentQuestion] !== undefined) {
//         setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//       } else {
//         alert('Please answer the question before proceeding.');
//       }
//     };
//     const {user} = useUser();
//     return (
//       <div className="bg-theme-light min-h-screen flex items-center justify-center">
//         <div className="quiz-container Container flex-col mx-auto bg-white w-3/5 h-4/5 px-6 py-5 rounded-xl border-slate-900 border-2 overflow-hidden">
//           <div className="quiz-header">
//             <h2
//               id="question"
//               className="flex justify-center font-body mb-2 font-semibold rounded-xl border-2 border-slate-900 py-4 text-2xl whitespace-normal break-words"
//             >
//               {questions[currentQuestion].question}
//             </h2>
//             {questions[currentQuestion].inputType === 'numeric' ? (
//               <input
//                 type="number"
//                 onChange={handleNumericInput}
//                 value={answers[currentQuestion] || ''}
//                 className="border rounded p-2 mt-4 w-full"
//               />
//             ) : (
//               <ul>
//                 {questions[currentQuestion].options &&
//                   questions[currentQuestion].options.map((option, optionIndex) => (
//                     <li
//                       key={optionIndex}
//                       className="flex px-4 mt-3 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500"
//                     >
//                       <input
//                         type="radio"
//                         name="answer"
//                         id={`option${optionIndex}`}
//                         className="answer"
//                         onChange={() => handleOptionChange(optionIndex)}
//                         checked={answers[currentQuestion] === optionIndex}
//                       />
//                       <label
//                         htmlFor={`option${optionIndex}`}
//                         className="ml-4 cursor-pointer select-none w-full whitespace-normal break-words"
//                         id={`option${optionIndex}_text`}
//                       >
//                         {option.label}
//                       </label>
//                     </li>
//                   ))}
//               </ul>
//             )}
//           </div>
//           {currentQuestion < questions.length - 1 ? (
//             <button
//               onClick={handleNext}
//               className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-green-400 hover:text-white border-2 border-slate-500 dark:text-white ml-96 mt-6"
//             >
//               <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                 Next
//               </span>
//             </button>
//           ) : (
//             <button
//               onClick={calculateTotalScore}
//               className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-green-400 hover:text-white border-2 border-slate-500 dark:text-white ml-96 mt-6"
//             >
//               <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                 Submit
//               </span>
//             </button>
//           )}
//           {showFinalScore && (
//             <div>
//               <p>Total Score: {totalScore}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };
  
//   export default Quiz;


// const PersonalisedPortfolio = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [totalScore, setTotalScore] = useState(0);
//   const [showFinalScore, setShowFinalScore] = useState(false);
//   const [workDur, setWorkDurAdded] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useUser();

//   const handleOptionChange = (optionIndex) => {
//     setAnswers((prevAnswers) => {
//       const newAnswers = { ...prevAnswers };
//       newAnswers[currentQuestion] = optionIndex;
//       return newAnswers;
//     });
//   };

//   const handleNumericInput = (event) => {
//     const numericValue = parseInt(event.target.value, 10);
//     setAnswers((prevAnswers) => {
//       const newAnswers = { ...prevAnswers };
//       newAnswers[currentQuestion] = numericValue;
//       return newAnswers;
//     });
//   };

//   const calculateTotalScore = async () => {
//     let calculatedScore = 0;
//     const detailedResponses = [];

//     questions.forEach((question, questionIndex) => {
//       const selectedOptionIndex = answers[questionIndex];
//       if (selectedOptionIndex !== undefined) {
//         const selectedOption = question.options && question.options[selectedOptionIndex];
//         if (selectedOption) {
//           calculatedScore += selectedOption.value;
//         }
//         detailedResponses.push({
//           question: question.question,
//           selectedOption: selectedOption ? selectedOption.label : answers[questionIndex],
//         });
//       }
//     });

//     const currentAge = answers[4];
//     const retirementAge = answers[5];

//     if (currentAge !== undefined && retirementAge !== undefined && !workDur) {
//       const totalWorkingYears = retirementAge - currentAge;

//       if (totalWorkingYears > 30) {
//         calculatedScore += 6;
//         setWorkDurAdded(true);
//       } else if (totalWorkingYears >= 25 && totalWorkingYears < 30) {
//         calculatedScore += 5;
//         setWorkDurAdded(true);
//       } else if (totalWorkingYears >= 20 && totalWorkingYears < 25) {
//         calculatedScore += 4;
//         setWorkDurAdded(true);
//       } else if (totalWorkingYears >= 15 && totalWorkingYears < 20) {
//         calculatedScore += 3;
//         setWorkDurAdded(true);
//       } else if (totalWorkingYears < 15) {
//         calculatedScore += 1;
//         setWorkDurAdded(true);
//       }
//     }

//     setTotalScore(calculatedScore);

//     try {
//       const userId = user.id;
//       const response = await axios.post('http://localhost:5000/quizResults/save', { 
//         userId, 
//         score: calculatedScore, 
//         responses: detailedResponses 
//       });
//       const personalityType = response.data.personalityType;

//       if (personalityType === 'Defensive Investor') {
//         navigate('/dashboard/defensive-investor');
//       } else if (personalityType === 'Income Investor') {
//         navigate('/dashboard/income-investor');
//       } else if (personalityType === 'Growth Investor') {
//         navigate('/dashboard/growth-investor');
//       } else if (personalityType === 'Aggressive Investor') {
//         navigate('/dashboard/aggressive-investor');
//       }
//     } catch (error) {
//       console.error('Error saving quiz result:', error);
//     }

//     setShowFinalScore(true);
//   };

//   const handleNext = () => {
//     if (answers[currentQuestion] !== undefined) {
//       setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//     } else {
//       alert('Please answer the question before proceeding.');
//     }
//   };

//   return (
//     <div className="bg-theme-light min-h-screen flex items-center justify-center">
//       <div className="quiz-container Container flex-col mx-auto bg-white w-3/5 h-4/5 px-6 py-5 rounded-xl border-slate-900 border-2 overflow-hidden">
//         <div className="quiz-header">
//           <h2
//             id="question"
//             className="flex justify-center font-body mb-2 font-semibold rounded-xl border-2 border-slate-900 py-4 text-2xl whitespace-normal break-words"
//           >
//             {questions[currentQuestion].question}
//           </h2>
//           {questions[currentQuestion].inputType === 'numeric' ? (
//             <input
//               type="number"
//               onChange={handleNumericInput}
//               value={answers[currentQuestion] || ''}
//               className="border rounded p-2 mt-4 w-full"
//             />
//           ) : (
//             <ul>
//               {questions[currentQuestion].options &&
//                 questions[currentQuestion].options.map((option, optionIndex) => (
//                   <li
//                     key={optionIndex}
//                     className="flex px-4 mt-3 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500"
//                   >
//                     <input
//                       type="radio"
//                       name="answer"
//                       id={`option${optionIndex}`}
//                       className="answer"
//                       onChange={() => handleOptionChange(optionIndex)}
//                       checked={answers[currentQuestion] === optionIndex}
//                     />
//                     <label
//                       htmlFor={`option${optionIndex}`}
//                       className="ml-4 cursor-pointer select-none w-full whitespace-normal break-words"
//                       id={`option${optionIndex}_text`}
//                     >
//                       {option.label}
//                     </label>
//                   </li>
//                 ))}
//             </ul>
//           )}
//         </div>
//         {currentQuestion < questions.length - 1 ? (
//           <button
//             onClick={handleNext}
//             className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-green-400 hover:text-white border-2 border-slate-500 dark:text-white ml-96 mt-6"
//           >
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               Next
//             </span>
//           </button>
//         ) : (
//           <button
//             onClick={calculateTotalScore}
//             className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-green-400 hover:text-white border-2 border-slate-500 dark:text-white ml-96 mt-6"
//           >
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               Submit
//             </span>
//           </button>
//         )}
//         {showFinalScore && (
//           <div>
//             <p>Total Score: {totalScore}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PersonalisedPortfolio;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
// import './Quiz.css'

const questionsEnglish = [
  {
    question: 'How much is your net worth?',
    options: [
      { label: 'Having only liabilities (-ve net worth)', value: 1 },
      { label: 'Up to 12 times monthly expenses', value: 2 },
      { label: '13–36 times of monthly expenses', value: 3 },
      { label: '37–48 times of monthly expenses', value: 4 },
      { label: '49–60 times of the monthly expenses', value: 5 },
    ],
  },
  {
    question: 'How much do you save of your monthly income?',
    options: [
      { label: 'Upto 5%', value: 1 },
      { label: '6 - 15%', value: 2 },
      { label: '16 - 25%', value: 3 },
      { label: '26 - 50%', value: 4 },
      { label: '51 - 75%', value: 5 },
    ],
  },
  {
    question: 'How many people are dependent on your income?',
    options: [
      { label: 'No dependency', value: 1 },
      { label: '1 dependent', value: 2 },
      { label: '2 dependent', value: 3 },
      { label: '3 dependent', value: 4 },
      { label: '4 or more', value: 5 },
    ],
  },
  {
    question: 'What is the consistency of your job and your income?',
    options: [
      { label: 'High (satisfied with job not gonna lose job)', value: 5 },
      { label: 'Moderate (unsatisfied / uncertain about job)', value: 3 },
      { label: 'Low (fear of losing job)', value: 1 },
    ],
  },
  {
    question: 'What is your current age?',
    options: [],
    inputType: 'numeric',
  },
  {
    question: 'At what age are you planning to retire?',
    options: [],
    inputType: 'numeric',
  },
  {
    question: 'How long will you keep investing?',
    options: [
      { label: '1 - 2 years', value: 1 },
      { label: '3 - 5 years', value: 2 },
      { label: '5 - 7 years', value: 3 },
      { label: '7+ years', value: 4 },
    ],
  },
  {
    question: 'What is the intent of the portfolio?',
    options: [
      { label: 'Generate income for today', value: 1 },
      { label: 'Generate income for later date', value: 2 },
      { label: 'To provide for my dependents (I will not be using these funds)', value: 3 },
      { label: 'To fund a large event in the future', value: 4 },
    ],
  },
  {
    question: 'What is the primary objective of your portfolio?',
    options: [
      { label: 'To prioritize security', value: 1 },
      { label: 'To aim for steady growth and avoiding fluctuation', value: 2 },
      { label: 'To balance between growth and security and keep up with inflation', value: 3 },
      { label: 'To focus on growth potential and accept some fluctuations in returns', value: 4 },
      { label: 'To solely pursue long term growth', value: 5 },
    ],
  },
  {
    question: 'What is your level of expertise in the stock market?',
    options: [
      { label: 'No knowledge (First time investor)', value: 1 },
      { label: 'Beginner Level (Already an investor / basic knowledge)', value: 2 },
      { label: 'Intermediate Level (good understanding of market)', value: 3 },
      { label: 'Expert Level (Investing in market for more than 3 years)', value: 4 },
      { label: 'Professional Level (investing in market for more than 5 years)', value: 5 },
    ],
  },
  {
    question: 'Consider an investment of 2 lakhs, how much fall can you tolerate in one month?',
    options: [
      { label: '0 - 5% OR Rs.10,000', value: 1 },
      { label: '6 - 10% OR Rs.10,000 to 20,000', value: 2 },
      { label: '11 - 20% OR Rs.20,000 to 40,000', value: 3 },
      { label: '21 - 30% OR Rs.40,000 to 60,000', value: 4 },
      { label: 'More than 30% or Rs.60,000', value: 5 },
    ],
  },
  {
    question: 'What is the maximum amount of time for which you can tolerate loss?',
    options: [
      { label: 'Less than 3 months', value: 1 },
      { label: 'Between 4 months to 1 year', value: 2 },
      { label: 'Between 1 - 2 years', value: 3 },
      { label: 'Between 2 - 3 years', value: 4 },
      { label: 'Between 3 - 5 years', value: 5 },
    ],
  },
];


const questionsHindi = [
  {
    question: 'आपकी कुल संपत्ति कितनी है?',
    options: [
      { label: 'केवल देनदारियाँ हैं (-ve net worth)', value: 1 },
      { label: 'मासिक खर्चों का 12 गुना तक', value: 2 },
      { label: 'मासिक खर्चों का 13–36 गुना', value: 3 },
      { label: 'मासिक खर्चों का 37–48 गुना', value: 4 },
      { label: 'मासिक खर्चों का 49–60 गुना', value: 5 },
    ],
  },
  {
    question: 'आपकी आय का स्रोत क्या है?',
    options: [
      { label: 'केवल वेतन', value: 1 },
      { label: 'केवल व्यवसाय आय', value: 2 },
      { label: 'वेतन और व्यवसाय आय दोनों', value: 3 },
      { label: 'केवल पेंशन', value: 4 },
      { label: 'केवल ब्याज/मुनाफा', value: 5 },
    ],
  },
  {
    question: 'आपकी वैवाहिक स्थिति क्या है?',
    options: [
      { label: 'अविवाहित', value: 1 },
      { label: 'विवाहित, बिना बच्चों के', value: 2 },
      { label: 'विवाहित, छोटे बच्चों के साथ', value: 3 },
      { label: 'विवाहित, बड़े बच्चों के साथ', value: 4 },
      { label: 'विधवा/विधुर/तलाकशुदा', value: 5 },
    ],
  },
  {
    question: 'आपका निवेश का उद्देश्य क्या है?',
    options: [
      { label: 'लघु अवधि (1-3 वर्ष)', value: 1 },
      { label: 'मध्यम अवधि (3-5 वर्ष)', value: 2 },
      { label: 'लंबी अवधि (5+ वर्ष)', value: 3 },
    ],
  },
  {
    question: 'आपकी वर्तमान आयु क्या है?',
    inputType: 'numeric',
  },
  {
    question: 'आप कितनी आयु में सेवानिवृत्त होना चाहते हैं?',
    inputType: 'numeric',
  },
  {
    question: 'आपकी जोखिम सहनशीलता कितनी है?',
    options: [
      { label: 'बहुत कम', value: 1 },
      { label: 'कम', value: 2 },
      { label: 'मध्यम', value: 3 },
      { label: 'उच्च', value: 4 },
      { label: 'बहुत उच्च', value: 5 },
    ],
  },
  {
    question: 'आप कितना समय अपने निवेश की निगरानी में लगाते हैं?',
    options: [
      { label: 'कोई समय नहीं', value: 1 },
      { label: 'महीने में एक बार', value: 2 },
      { label: 'सप्ताह में एक बार', value: 3 },
      { label: 'दैनिक', value: 4 },
      { label: 'दिन में कई बार', value: 5 },
    ],
  },
  {
    question: 'आप किस प्रकार के निवेशों में रुचि रखते हैं?',
    options: [
      { label: 'केवल सुरक्षित निवेश (जैसे बांड)', value: 1 },
      { label: 'मुख्यतः सुरक्षित निवेश, कुछ जोखिम वाले निवेश', value: 2 },
      { label: 'मिश्रित', value: 3 },
      { label: 'मुख्यतः जोखिम वाले निवेश, कुछ सुरक्षित निवेश', value: 4 },
      { label: 'केवल जोखिम वाले निवेश (जैसे स्टॉक्स)', value: 5 },
    ],
  },
  {
    question: 'आपको निवेश के बारे में कितना ज्ञान है?',
    options: [
      { label: 'कोई ज्ञान नहीं', value: 1 },
      { label: 'कुछ ज्ञान', value: 2 },
      { label: 'मध्यम ज्ञान', value: 3 },
      { label: 'अच्छा ज्ञान', value: 4 },
      { label: 'विशेषज्ञता स्तर का ज्ञान', value: 5 },
    ],
  },
  {
    question: 'क्या आप निवेश करते समय किसी वित्तीय सलाहकार की मदद लेते हैं?',
    options: [
      { label: 'हमेशा', value: 1 },
      { label: 'अधिकांश समय', value: 2 },
      { label: 'कभी-कभी', value: 3 },
      { label: 'कभी नहीं', value: 4 },
    ],
  },
  {
    question: 'आपकी मासिक आय का कितना प्रतिशत आप निवेश के रूप में रखते हैं?',
    options: [
      { label: '5% से कम', value: 1 },
      { label: '5% से 10%', value: 2 },
      { label: '10% से 20%', value: 3 },
      { label: '20% से 30%', value: 4 },
      { label: '30% से अधिक', value: 5 },
    ],
  },
  {
    question: 'आपके पास कितनी आकस्मिक निधि है?',
    options: [
      { label: 'कोई आकस्मिक निधि नहीं', value: 1 },
      { label: '1-2 महीने की मासिक आय', value: 2 },
      { label: '3-6 महीने की मासिक आय', value: 3 },
      { label: '6-12 महीने की मासिक आय', value: 4 },
      { label: '12 महीने से अधिक की मासिक आय', value: 5 },
    ],
  },
  {
    question: 'आपके पास कितने वित्तीय उत्तरदायित्व हैं?',
    options: [
      { label: 'कोई वित्तीय उत्तरदायित्व नहीं', value: 1 },
      { label: 'बहुत कम', value: 2 },
      { label: 'मध्यम', value: 3 },
      { label: 'उच्च', value: 4 },
      { label: 'बहुत उच्च', value: 5 },
    ],
  },
  {
    question: 'आपका निवेश अनुभव कितना है?',
    options: [
      { label: 'कोई अनुभव नहीं', value: 1 },
      { label: '1-2 साल', value: 2 },
      { label: '3-5 साल', value: 3 },
      { label: '6-10 साल', value: 4 },
      { label: '10 साल से अधिक', value: 5 },
    ],
  },
  {
    question: 'आपके निवेश के लिए आपका प्राथमिक लक्ष्य क्या है?',
    options: [
      { label: 'धन सुरक्षित रखना', value: 1 },
      { label: 'नियमित आय उत्पन्न करना', value: 2 },
      { label: 'पूंजी वृद्धि', value: 3 },
      { label: 'उच्च रिटर्न के लिए उच्च जोखिम उठाना', value: 4 },
    ],
  },
];


const PersonalisedPortfolio = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [workDur, setWorkDurAdded] = useState(false);
  const [language, setLanguage] = useState(null);
  const navigate = useNavigate();
  const { user } = useUser();

  const handleOptionChange = (optionIndex) => {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers };
      newAnswers[currentQuestion] = optionIndex;
      return newAnswers;
    });
  };

  const handleNumericInput = (event) => {
    const numericValue = parseInt(event.target.value, 10);
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers };
      newAnswers[currentQuestion] = numericValue;
      return newAnswers;
    });
  };

  const calculateTotalScore = async () => {
    let calculatedScore = 0;
    const detailedResponses = [];
    const questions = language === 'hindi' ? questionsHindi : questionsEnglish;

    questions.forEach((question, questionIndex) => {
      const selectedOptionIndex = answers[questionIndex];
      if (selectedOptionIndex !== undefined) {
        const selectedOption = question.options && question.options[selectedOptionIndex];
        if (selectedOption) {
          calculatedScore += selectedOption.value;
        }
        detailedResponses.push({
          question: question.question,
          selectedOption: selectedOption ? selectedOption.label : answers[questionIndex],
        });
      }
    });

    const currentAge = answers[4];
    const retirementAge = answers[5];

    if (currentAge !== undefined && retirementAge !== undefined && !workDur) {
      const totalWorkingYears = retirementAge - currentAge;

      if (totalWorkingYears > 30) {
        calculatedScore += 6;
        setWorkDurAdded(true);
      } else if (totalWorkingYears >= 25 && totalWorkingYears < 30) {
        calculatedScore += 5;
        setWorkDurAdded(true);
      } else if (totalWorkingYears >= 20 && totalWorkingYears < 25) {
        calculatedScore += 4;
        setWorkDurAdded(true);
      } else if (totalWorkingYears >= 15 && totalWorkingYears < 20) {
        calculatedScore += 3;
        setWorkDurAdded(true);
      } else if (totalWorkingYears < 15) {
        calculatedScore += 1;
        setWorkDurAdded(true);
      }
    }

    setTotalScore(calculatedScore);

    try {
      const userId = user.id;
      const response = await axios.post('http://localhost:5005/quizResults/save', { 
        userId, 
        score: calculatedScore, 
        responses: detailedResponses 
      });
      const personalityType = response.data.personalityType;

      if (personalityType === 'Defensive Investor') {
        navigate('/dashboard/defensive-investor');
      } else if (personalityType === 'Income Investor') {
        navigate('/dashboard/income-investor');
      } else if (personalityType === 'Growth Investor') {
        navigate('/dashboard/growth-investor');
      } else if (personalityType === 'Aggressive Investor') {
        navigate('/dashboard/aggressive-investor');
      }
    } catch (error) {
      console.error('Error saving quiz result:', error);
    }

    setShowFinalScore(true);
  };

  const handleNext = () => {
    if (answers[currentQuestion] !== undefined) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      alert('Please answer the question before proceeding.');
    }
  };

  const handleLanguageSelection = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  if (!language) {
    return (
      <div className="bg-theme-light min-h-screen flex items-center justify-center">
        <div className="flex flex-col mx-auto bg-white w-3/5 h-4/5 px-6 py-5 rounded-xl border-slate-900 border-2 overflow-hidden">
          <h2 className="flex justify-center font-body mb-2 font-semibold rounded-xl border-2 border-slate-900 py-4 text-2xl">
            Select Language / भाषा चुनें
          </h2>
          <button
            onClick={() => handleLanguageSelection('english')}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-green-400 hover:text-white border-2 border-slate-500 dark:text-white mx-auto mt-6"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              English
            </span>
          </button>
          <button
            onClick={() => handleLanguageSelection('hindi')}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-green-400 hover:text-white border-2 border-slate-500 dark:text-white mx-auto mt-6"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              हिंदी
            </span>
          </button>
        </div>
      </div>
    );
  }

  const questions = language === 'hindi' ? questionsHindi : questionsEnglish;

  return (
    <div className="bg-theme-light min-h-screen flex items-center justify-center">
      <div className="quiz-container Container flex-col mx-auto bg-white w-3/5 h-4/5 px-6 py-5 rounded-xl border-slate-900 border-2 overflow-hidden">
        <div className="quiz-header">
          <h2
            id="question"
            className="flex justify-center font-body mb-2 font-semibold rounded-xl border-2 border-slate-900 py-4 text-2xl whitespace-normal break-words"
          >
            {questions[currentQuestion].question}
          </h2>
          {questions[currentQuestion].inputType === 'numeric' ? (
            <input
              type="number"
              onChange={handleNumericInput}
              value={answers[currentQuestion] || ''}
              className="border rounded p-2 mt-4 w-full"
            />
          ) : (
            <ul>
              {questions[currentQuestion].options &&
                questions[currentQuestion].options.map((option, optionIndex) => (
                  <li
                    key={optionIndex}
                    className="flex px-4 mt-3 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500"
                  >
                    <input
                      type="radio"
                      name="answer"
                      id={`option${optionIndex}`}
                      className="answer"
                      onChange={() => handleOptionChange(optionIndex)}
                      checked={answers[currentQuestion] === optionIndex}
                    />
                    <label
                      htmlFor={`option${optionIndex}`}
                      className="ml-4 cursor-pointer select-none w-full whitespace-normal break-words"
                      id={`option${optionIndex}_text`}
                    >
                      {option.label}
                    </label>
                  </li>
                ))}
            </ul>
          )}
        </div>
        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-green-400 hover:text-white border-2 border-slate-500 dark:text-white ml-96 mt-6"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Next
            </span>
          </button>
        ) : (
          <button
            onClick={calculateTotalScore}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-green-400 hover:text-white border-2 border-slate-500 dark:text-white ml-96 mt-6"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Finish Quiz
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonalisedPortfolio;

