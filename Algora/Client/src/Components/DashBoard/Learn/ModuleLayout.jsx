// import React from 'react'
// import { Outlet, NavLink , useLocation} from 'react-router-dom'

// function ModuleLayout() {
//     const location = useLocation();
//     const isOnHindiPage = location.pathname.includes('/hindi');
//     const isOnEnglishPage = location.pathname.includes('/english');
//   return (
//     <>
//       <div className='flex justify-center mt-5 space-x-8'>

//       <NavLink to={!isOnEnglishPage ? ${location.pathname}/english : location.pathname}  className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-blue-600 inline-block">
// <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
// <span className="relative group-hover:text-white">English</span>
// </NavLink>

//     <NavLink to={!isOnHindiPage ? ${location.pathname}/hindi : location.pathname} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-blue-600 inline-block">
// <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
// <span className="relative group-hover:text-white">Hindi</span>
// </NavLink>
//       </div>
//       <Outlet/>
//     </>
//   )
// }

// export default ModuleLayout