// import React, { useState, useEffect } from 'react';
// import { useUser } from '@clerk/clerk-react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';

// const quizQuestions = [
//   {
//     question: "What is the purpose of a budget?",
//     options: ["To keep track of expenses and income", "To minimize debt", "To increase savings", "All of the above"],
//     correctAnswer: 3
//   },
//   {
//     question: "What is interest?",
//     options: ["A fee paid for borrowing money", "The cost of a service", "A discount on a product", "A type of investment"],
//     correctAnswer: 0
//   },
//   {
//     question: "What is inflation?",
//     options: ["A decrease in the price of goods and services", "An increase in the price of goods and services", "An increase in the value of money", "A decrease in the value of money"],
//     correctAnswer: 1
//   },
//   {
//     question: "What does it mean to have a diversified investment portfolio?",
//     options: ["Investing all money in one type of asset", "Spreading investments across different types of assets", "Keeping money in a savings account", "Investing only in bonds"],
//     correctAnswer: 1
//   },
//   {
//     question: "How much of your income should you ideally save for emergencies?",
//     options: ["1-2%", "3-5%", "10-15%", "20-30%"],
//     correctAnswer: 2
//   },
//   {
//     question: "What is the purpose of an emergency fund?",
//     options: ["To cover unexpected expenses", "To invest in stocks", "To pay off credit card debt", "To buy luxury items"],
//     correctAnswer: 0
//   },
//   {
//     question: "What is a credit score?",
//     options: ["A measure of your ability to save", "A record of your borrowing and repayment history", "The interest rate on a loan", "The amount of money you owe"],
//     correctAnswer: 1
//   },
//   {
//     question: "How can you improve your credit score?",
//     options: ["Making timely payments", "Closing unused credit accounts", "Maximizing the use of your credit limit", "Avoiding loans altogether"],
//     correctAnswer: 0
//   },
//   {
//     question: "What is a mutual fund?",
//     options: ["A savings account with a bank", "A type of insurance policy", "An investment vehicle that pools money from multiple investors to buy securities", "A retirement account"],
//     correctAnswer: 2
//   },
//   {
//     question: "What is the stock market?",
//     options: ["A place where people buy groceries", "A market for buying and selling company shares", "A type of savings account", "A place where government bonds are traded"],
//     correctAnswer: 1
//   },
//   {
//     question: "What is a bond?",
//     options: ["A share in a company", "A loan made to a company or government", "An insurance policy", "A type of credit card"],
//     correctAnswer: 1
//   },
//   {
//     question: "What is a pension plan?",
//     options: ["A savings account for buying a house", "An investment plan for retirement", "A loan for starting a business", "A type of insurance policy"],
//     correctAnswer: 1
//   },
//   {
//     question: "How often do you seek information or resources to enhance your financial knowledge?",
//     options: ["Regularly (monthly)", "Occasionally (a few times a year)", "Rarely (once a year or less)", "Never"],
//     correctAnswer: null 
//   }
// ];

// const FinancialLiteracyQuiz = () => {
//         const { user } = useUser();
//         const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//         const [score, setScore] = useState(0);
//         const [showResults, setShowResults] = useState(false);
      
//         useEffect(() => {
//           if (showResults) {
//             saveUser(score);
//           }
//         }, [showResults]);
      
//         const handleAnswerOptionClick = (isCorrect) => {
//           if (isCorrect) {
//             setScore((prevScore) => prevScore + 1);
//           }
//           const nextQuestion = currentQuestionIndex + 1;
//           if (nextQuestion < quizQuestions.length) {
//             setCurrentQuestionIndex(nextQuestion);
//           } else {
//             setShowResults(true);
//           }
//         };
      
//         const saveUser = async (finalScore) => {
//           if (!user) return;
      
//           const userData = {
//             name: user.fullName,
//             userid: user.id,
//             email: user.primaryEmailAddress.emailAddress,
//             literacyQuizScore: finalScore,
//             courseType: finalScore <= 5 ? 'Beginner' : finalScore <= 10 ? 'Intermediate' : 'Advanced',
//           };
      
//           try {
//             const response = await axios.post('http://localhost:5000/users/create', userData);
//             console.log('User saved:', response.data);
//           } catch (error) {
//             console.error('Error saving user:', error);
//           }
//         };
      
//         return (
//           <div className="bg-theme-light min-h-screen flex items-center justify-center">
//             <div className="quiz-container container flex-col mx-auto bg-white w-3/5 h-4/5 px-8 py-5 rounded-xl border-slate-900 border-2 overflow-hidden">
//               {showResults ? (
//                 <div className="bg-white p-8 rounded shadow-md text-center">
//                   <Navigate to={`/dashboard/learn/`} />
//                 </div>
//               ) : (
//                 <div className="quiz-header">
//                   <h2
//                     id="question"
//                     className="flex justify-center font-body mb-2 font-semibold rounded-xl border-2 border-slate-900 py-4 text-2xl whitespace-normal break-words"
//                   >
//                     {quizQuestions[currentQuestionIndex].question}
//                   </h2>
//                   <ul>
//                     {quizQuestions[currentQuestionIndex].options.map((option, index) => (
//                       <li
//                         key={index}
//                         className="flex px-4 mt-3 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500"
//                       >
//                         <button
//                           onClick={() => handleAnswerOptionClick(index === quizQuestions[currentQuestionIndex].correctAnswer)}
//                           className="w-full text-left"
//                         >
//                           {option}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       };

//   export default FinancialLiteracyQuiz;



import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const quizQuestions = {
  english: [
    { question: "What is the purpose of a budget?", options: ["To keep track of expenses and income", "To minimize debt", "To increase savings", "All of the above"], correctAnswer: 3 },
    { question: "What is interest?", options: ["A fee paid for borrowing money", "The cost of a service", "A discount on a product", "A type of investment"], correctAnswer: 0 },
    { question: "What is inflation?", options: ["A decrease in the price of goods and services", "An increase in the price of goods and services", "An increase in the value of money", "A decrease in the value of money"], correctAnswer: 1 },
    { question: "What does it mean to have a diversified investment portfolio?", options: ["Investing all money in one type of asset", "Spreading investments across different types of assets", "Keeping money in a savings account", "Investing only in bonds"], correctAnswer: 1 },
    { question: "How much of your income should you ideally save for emergencies?", options: ["1-2%", "3-5%", "10-15%", "20-30%"], correctAnswer: 2 },
    { question: "What is the purpose of an emergency fund?", options: ["To cover unexpected expenses", "To invest in stocks", "To pay off credit card debt", "To buy luxury items"], correctAnswer: 0 },
    { question: "What is a credit score?", options: ["A measure of your ability to save", "A record of your borrowing and repayment history", "The interest rate on a loan", "The amount of money you owe"], correctAnswer: 1 },
    { question: "How can you improve your credit score?", options: ["Making timely payments", "Closing unused credit accounts", "Maximizing the use of your credit limit", "Avoiding loans altogether"], correctAnswer: 0 },
    { question: "What is a mutual fund?", options: ["A savings account with a bank", "A type of insurance policy", "An investment vehicle that pools money from multiple investors to buy securities", "A retirement account"], correctAnswer: 2 },
    { question: "What is the stock market?", options: ["A place where people buy groceries", "A market for buying and selling company shares", "A type of savings account", "A place where government bonds are traded"], correctAnswer: 1 },
    { question: "What is a bond?", options: ["A share in a company", "A loan made to a company or government", "An insurance policy", "A type of credit card"], correctAnswer: 1 },
    { question: "What is a pension plan?", options: ["A savings account for buying a house", "An investment plan for retirement", "A loan for starting a business", "A type of insurance policy"], correctAnswer: 1 },
    { question: "How often do you seek information or resources to enhance your financial knowledge?", options: ["Regularly (monthly)", "Occasionally (a few times a year)", "Rarely (once a year or less)", "Never"], correctAnswer: null }
  ],
  hindi: [
    { question: "बजट का उद्देश्य क्या है?", options: ["व्यय और आय का ट्रैक रखना", "ऋण को कम करना", "बचत बढ़ाना", "उपरोक्त सभी"], correctAnswer: 3 },
    { question: "ब्याज क्या है?", options: ["पैसे उधार लेने के लिए भुगतान की जाने वाली फीस", "सेवा की लागत", "उत्पाद पर छूट", "निवेश का एक प्रकार"], correctAnswer: 0 },
    { question: "मुद्रास्फीति क्या है?", options: ["सामान और सेवाओं की कीमत में कमी", "सामान और सेवाओं की कीमत में वृद्धि", "पैसे के मूल्य में वृद्धि", "पैसे के मूल्य में कमी"], correctAnswer: 1 },
    { question: "विविधतापूर्ण निवेश पोर्टफोलियो का क्या अर्थ है?", options: ["सभी पैसे एक प्रकार की संपत्ति में निवेश करना", "विभिन्न प्रकार की संपत्तियों में निवेश को फैलाना", "पैसे को बचत खाते में रखना", "केवल बांड में निवेश करना"], correctAnswer: 1 },
    { question: "आपकी आय का कितना हिस्सा आपको आपात स्थितियों के लिए बचाना चाहिए?", options: ["1-2%", "3-5%", "10-15%", "20-30%"], correctAnswer: 2 },
    { question: "आपातकालीन निधि का उद्देश्य क्या है?", options: ["अप्रत्याशित खर्चों को कवर करना", "स्टॉक्स में निवेश करना", "क्रेडिट कार्ड ऋण का भुगतान करना", "विलासिता की वस्तुएं खरीदना"], correctAnswer: 0 },
    { question: "क्रेडिट स्कोर क्या है?", options: ["आपकी बचत करने की क्षमता का माप", "आपकी उधारी और पुनर्भुगतान इतिहास का रिकॉर्ड", "ऋण पर ब्याज दर", "आपका कर्ज"], correctAnswer: 1 },
    { question: "आप अपने क्रेडिट स्कोर को कैसे सुधार सकते हैं?", options: ["समय पर भुगतान करना", "अप्रयुक्त क्रेडिट खातों को बंद करना", "अपने क्रेडिट सीमा का अधिकतम उपयोग करना", "ऋणों से पूरी तरह बचना"], correctAnswer: 0 },
    { question: "म्यूचुअल फंड क्या है?", options: ["एक बैंक के साथ एक बचत खाता", "एक प्रकार की बीमा पॉलिसी", "एक निवेश वाहन जो कई निवेशकों से पैसे को एकत्र करता है और प्रतिभूतियों को खरीदता है", "एक सेवानिवृत्ति खाता"], correctAnswer: 2 },
    { question: "स्टॉक मार्केट क्या है?", options: ["एक जगह जहाँ लोग किराने का सामान खरीदते हैं", "एक बाजार जहाँ कंपनी शेयर खरीदे और बेचे जाते हैं", "एक प्रकार का बचत खाता", "एक जगह जहाँ सरकारी बांड का व्यापार होता है"], correctAnswer: 1 },
    { question: "बॉन्ड क्या है?", options: ["कंपनी में शेयर", "कंपनी या सरकार को दिया गया ऋण", "एक बीमा पॉलिसी", "एक प्रकार का क्रेडिट कार्ड"], correctAnswer: 1 },
    { question: "पेंशन योजना क्या है?", options: ["घर खरीदने के लिए एक बचत खाता", "सेवानिवृत्ति के लिए एक निवेश योजना", "व्यवसाय शुरू करने के लिए ऋण", "एक प्रकार की बीमा पॉलिसी"], correctAnswer: 1 },
    { question: "आप कितनी बार अपनी वित्तीय जानकारी या संसाधनों को बढ़ाने के लिए जानकारी या संसाधनों की तलाश करते हैं?", options: ["नियमित रूप से (मासिक)", "कभी-कभी (साल में कुछ बार)", "बहुत कम (साल में एक बार या उससे कम)", "कभी नहीं"], correctAnswer: null }
  ]
};

const FinancialLiteracyQuiz = () => {
  const { user } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [language, setLanguage] = useState('english');

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
    if (nextQuestion < quizQuestions[language].length) {
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
      const response = await axios.post('http://localhost:5005/users/create', userData
      );
      console.log('User saved:', response.data);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <div className="bg-theme-light min-h-screen flex items-center justify-center">
      <div className="quiz-container container flex-col mx-auto bg-white w-3/5 h-4/5 px-8 py-5 rounded-xl border-slate-900 border-2 overflow-hidden">
        {showResults ? (
          <div className="bg-white p-8 rounded shadow-md text-center">
            <Navigate to={`/dashboard/learn/`} />
          </div>
        ) : (
          <>
            <div className="language-selection flex justify-end mb-4">
              <button
                onClick={() => setLanguage('english')}
                className={`mr-2 px-4 py-2 rounded ${language === 'english' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hindi')}
                className={`px-4 py-2 rounded ${language === 'hindi' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                हिंदी
              </button>
            </div>
            <div className="quiz-header">
              <h2
                id="question"
                className="flex justify-center font-body mb-2 font-semibold rounded-xl border-2 border-slate-900 py-4 text-2xl whitespace-normal break-words"
              >
                {quizQuestions[language][currentQuestionIndex].question}
              </h2>
              <ul>
                {quizQuestions[language][currentQuestionIndex].options.map((option, index) => (
                  <li
                    key={index}
                    className="flex px-4 mt-3 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500"
                  >
                    <button
                      onClick={() => handleAnswerOptionClick(index === quizQuestions[language][currentQuestionIndex].correctAnswer)}
                      className="w-full text-left"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FinancialLiteracyQuiz;
