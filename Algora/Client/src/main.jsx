// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { ClerkProvider } from '@clerk/clerk-react';
// import Layout from './Components/Layout/Layout.jsx';
// import LandingPage from './Components/Home/Landing Page/LandingPage.jsx';
// import Contact from './Components/Contact Page/Contact.jsx';
// import About from './Components/About Page/About.jsx';
// import DashboardLayout from './Components/DashBoard/Layout/Layout.jsx';
// import Investment from './Components/DashBoard/Investments/Investment.jsx';
// import Profile from './Components/DashBoard/Profile/Profile.jsx';
// import MainContent from './Components/DashBoard/MainContent/MainContent.jsx';
// import ProtectedRoute from './Components/Protected Route/ProtectedRoute.jsx';
// import Quiz from './Components/DashBoard/Home/Personalised Portfolio/PersonalisedPortfolio.jsx';
// import IncomeInvestor from './Components/DashBoard/Home/Personality Types/IncomeInvestor.jsx';
// import DefensiveInvestor from './Components/DashBoard/Home/Personality Types/DefensiveInvestor.jsx';
// import GrowthInvestor from './Components/DashBoard/Home/Personality Types/GrowthInvestor.jsx';
// import AggressiveInvestor from './Components/DashBoard/Home/Personality Types/AggressiveInvestor.jsx';
// import YojnaBuddy from './Components/DashBoard/Yojna Buddy/YojnaBuddy.jsx';
// import Learn from './Components/DashBoard/Learn/Learn.jsx';
// import BeginnerModule1 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule1.jsx';
// import BeginnerModule2 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule2.jsx';
// import BeginnerModule3 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule3.jsx';
// import BeginnerModule4 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule4.jsx';
// import BeginnerModule5 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule5.jsx';
// import FinancialLiteracyQuiz from './Components/Financial Literacy Quiz/FinancialLiteracyQuiz.jsx';

// import IntermediateModule2 from './Components/DashBoard/Learn/Modules/InterMediate/InterMediatemodule2.jsx';
// import IntermediateModule3 from './Components/DashBoard/Learn/Modules/InterMediate/IntermediateModule3.jsx';
// import IntermediateModule4 from './Components/DashBoard/Learn/Modules/InterMediate/IntermediateModule4.jsx';
// import IntermediateModule1 from './Components/DashBoard/Learn/Modules/InterMediate/IntermediateModule1.jsx';
// import BeginnerModule1Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule1Hindi.jsx';
// import BeginnerModule2Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule2Hindi.jsx';
// import BeginnerModule3Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule3Hindi.jsx';
// import BeginnerModule4Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule4Hindi.jsx';
// import BeginnerModule5Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule5Hindi.jsx';



// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing Publishable Key');
// }

// const routerConfig = [
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '/', element: <LandingPage /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'about', element: <About /> },
//     ],
//   },
//   {
//     path: '/financial-literacy-quiz',
//     element: <ProtectedRoute><FinancialLiteracyQuiz /></ProtectedRoute>,
//   },
//   {
//     path: '/dashboard',
//     element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
//     children: [
//       { path: 'profile', element: <Profile /> },
//       { path: '', element: <MainContent /> },
//       { path: 'learn', element: <Learn /> },
//       { path: 'investment', element: <Investment /> },
//       { path: 'yojna-buddy', element: <YojnaBuddy /> },
//       { path: 'quiz', element: <Quiz /> },
//       { path: 'income-investor', element: <IncomeInvestor /> },
//       { path: 'defensive-investor', element: <DefensiveInvestor /> },
//       { path: 'growth-investor', element: <GrowthInvestor /> },
//       { path: 'aggressive-investor', element: <AggressiveInvestor /> },
//       { path: 'beginner/1', element: <BeginnerModule1 /> },
//       { path: 'beginner/2', element: <BeginnerModule2 /> },
//       { path: 'beginner/3', element: <BeginnerModule3 /> },
//       { path: 'beginner/4', element: <BeginnerModule4 /> },
//       { path: 'beginner/5', element: <BeginnerModule5 /> },
//       { path: 'beginner/1-hindi', element: <BeginnerModule1Hindi /> },
//       { path: 'beginner/2-hindi', element: <BeginnerModule2Hindi /> },
//       { path: 'beginner/3-hindi', element: <BeginnerModule3Hindi /> },
//       { path: 'beginner/5-hindi', element: <BeginnerModule5Hindi /> },
//       { path: 'beginner/4-hindi', element: <BeginnerModule4Hindi /> },
//       { path: 'intermediate/2', element: <IntermediateModule2 /> },
//       { path: 'intermediate/3', element: <IntermediateModule3 /> },
//       { path: 'intermediate/4', element: <IntermediateModule4 /> },
//       { path: 'intermediate/1', element: <IntermediateModule1 /> },

      

//     ],
//   },
// ];

// const router = createBrowserRouter(routerConfig);
  

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//       <RouterProvider router={router} />
//     </ClerkProvider>
//   </React.StrictMode>
// );




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Layout from './Components/Layout/Layout.jsx';
import LandingPage from './Components/Home/Landing Page/LandingPage.jsx';
import Contact from './Components/Contact Page/Contact.jsx';
import About from './Components/About Page/About.jsx';
import DashboardLayout from './Components/DashBoard/Layout/Layout.jsx';
import Investment from './Components/DashBoard/Investments/Investment.jsx';
import Profile from './Components/DashBoard/Profile/Profile.jsx';
import MainContent from './Components/DashBoard/MainContent/MainContent.jsx';
import ProtectedRoute from './Components/Protected Route/ProtectedRoute.jsx';
import Quiz from './Components/DashBoard/Home/Personalised Portfolio/PersonalisedPortfolio.jsx';
import IncomeInvestor from './Components/DashBoard/Home/Personality Types/IncomeInvestor.jsx';
import DefensiveInvestor from './Components/DashBoard/Home/Personality Types/DefensiveInvestor.jsx';
import GrowthInvestor from './Components/DashBoard/Home/Personality Types/GrowthInvestor.jsx';
import AggressiveInvestor from './Components/DashBoard/Home/Personality Types/AggressiveInvestor.jsx';
import YojnaBuddy from './Components/DashBoard/Yojna Buddy/YojnaBuddy.jsx';
import Learn from './Components/DashBoard/Learn/Learn.jsx';
import BeginnerModule1 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule1.jsx';
import BeginnerModule2 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule2.jsx';
import BeginnerModule3 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule3.jsx';
import BeginnerModule4 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule4.jsx';
import BeginnerModule5 from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule5.jsx';
import FinancialLiteracyQuiz from './Components/Financial Literacy Quiz/FinancialLiteracyQuiz.jsx';

import IntermediateModule2 from './Components/DashBoard/Learn/Modules/InterMediate/InterMediatemodule2.jsx';
import IntermediateModule3 from './Components/DashBoard/Learn/Modules/InterMediate/IntermediateModule3.jsx';
import IntermediateModule4 from './Components/DashBoard/Learn/Modules/InterMediate/IntermediateModule4.jsx';
import IntermediateModule1 from './Components/DashBoard/Learn/Modules/InterMediate/IntermediateModule1.jsx';
import BeginnerModule1Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule1Hindi.jsx';
import BeginnerModule2Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule2Hindi.jsx';
import BeginnerModule3Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule3Hindi.jsx';
import BeginnerModule4Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule4Hindi.jsx';
import BeginnerModule5Hindi from './Components/DashBoard/Learn/Modules/Beginner/BeginnerModule5Hindi.jsx';
import FinVidyaInformation from './Components/VidyaPage/vidya.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const routerConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '/financial-literacy-quiz',
    element: <ProtectedRoute><FinancialLiteracyQuiz /></ProtectedRoute>,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
    children: [
      { path: 'profile', element: <Profile /> },
      { path: '', element: <MainContent /> },
      { path: 'learn', element: <Learn /> },
      { path: 'investment', element: <Investment /> },
      { path: 'yojna-buddy', element: <YojnaBuddy /> },
      { path: 'quiz', element: <Quiz /> },
      { path: 'income-investor', element: <IncomeInvestor /> },
      { path: 'defensive-investor', element: <DefensiveInvestor /> },
      { path: 'growth-investor', element: <GrowthInvestor /> },
      { path: 'aggressive-investor', element: <AggressiveInvestor /> },
      { path: 'beginner/1', element: <BeginnerModule1 /> },
      { path: 'beginner/2', element: <BeginnerModule2 /> },
      { path: 'beginner/3', element: <BeginnerModule3 /> },
      { path: 'beginner/4', element: <BeginnerModule4 /> },
      { path: 'beginner/5', element: <BeginnerModule5 /> },
      { path: 'beginner/1-hindi', element: <BeginnerModule1Hindi /> },
      { path: 'beginner/2-hindi', element: <BeginnerModule2Hindi /> },
      { path: 'beginner/3-hindi', element: <BeginnerModule3Hindi /> },
      { path: 'beginner/5-hindi', element: <BeginnerModule5Hindi /> },
      { path: 'beginner/4-hindi', element: <BeginnerModule4Hindi /> },
      { path: 'intermediate/2', element: <IntermediateModule2 /> },
      { path: 'intermediate/3', element: <IntermediateModule3 /> },
      { path: 'intermediate/4', element: <IntermediateModule4 /> },
      { path: 'intermediate/1', element: <IntermediateModule1 /> },
      { path: 'finvidya-information', element: <FinVidyaInformation data={[{ companyName: 'Company A', sentimentValue: 1 }, { companyName: 'Company B', sentimentValue: -1 }, { companyName: 'Company C', sentimentValue: 1 }]} /> },

    ],
  },
];

const router = createBrowserRouter(routerConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
