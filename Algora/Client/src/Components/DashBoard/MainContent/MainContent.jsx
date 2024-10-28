// import { NavLink } from "react-router-dom";
// import { IoArrowRedoCircleOutline } from "react-icons/io5";
// import FinancialLiteracyResultCard from "./FinancialLiteracyResultCard";
// import InvestorProfileResult from "./InvestorProfileResult";
// import YoutubeRecommendation from "./YoutubeRecommendation";
// import SearchComponent from "./SearchComponent";


// const MainContent = () => {
  
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Main Content</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="bg-white shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500"><NavLink to="/dashboard/quiz" className="flex justify-center items-center gap-4">Personalised Portfolio <IoArrowRedoCircleOutline size={20} /></NavLink></div>
//         <div className="bg-white shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500"><NavLink to="/financial-literacy-quiz" className="flex justify-center items-center gap-4">Personal Finance Quiz <IoArrowRedoCircleOutline size={20} /></NavLink></div>
//       </div>
//       <div>
//       <YoutubeRecommendation />
//       </div>
//       <div className="flex gap-4 mt-10">
//       <FinancialLiteracyResultCard />
//       <InvestorProfileResult />
      
//       </div>
      
//     </div>
//   );
// };






import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoArrowRedoCircleOutline } from 'react-icons/io5';
import FinancialLiteracyResultCard from './FinancialLiteracyResultCard';
import InvestorProfileResult from './InvestorProfileResult';
import YoutubeRecommendationSystem from './YoutubeRecommendation';


const MainContent = () => {

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Main Content</h2>

      {/* SearchComponent added here */}
      <div className="flex gap-4 items-center justify-center mb-4">
        {/* Example card with NavLink */}
        <div className="bg-white shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500">
          <NavLink to="/dashboard/quiz" className="flex justify-center items-center gap-4">
            Personalised Portfolio <IoArrowRedoCircleOutline size={20} />
          </NavLink>
        </div>

        {/* Example card with NavLink */}
        <div className="bg-white shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500">
          <NavLink to="/financial-literacy-quiz" className="flex justify-center items-center gap-4">
            Personal Finance Quiz <IoArrowRedoCircleOutline size={20} />
          </NavLink>
        </div>
      </div>
      <div className="flex gap-4 mt-10 justify-center">
        {/* Your existing cards or components */}
        {/* <FinancialLiteracyResultCard /> */}
        <InvestorProfileResult />
      </div>
      <div className="flex justify-center">
        {/* Your existing cards or components */}
        <YoutubeRecommendationSystem />
      </div>

      {/* Search bar */}
    </div>
  );
};

export default MainContent;



