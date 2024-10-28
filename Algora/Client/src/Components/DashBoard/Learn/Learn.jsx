import React from 'react';
import { NavLink } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

function Learn() {
  return (
    <div className='p-6'>
      <div>
        <div className='text-2xl font-bold mb-4 ml-6'>Beginner</div>
        <div className='p-6'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ModuleLink level="beginner" moduleId={1} />
            <ModuleLink level="beginner" moduleId={2} />
            <ModuleLink level="beginner" moduleId={3} />
            <ModuleLink level="beginner" moduleId={4} />
            <ModuleLink level="beginner" moduleId={5} />
          </div>
        </div>
      </div>

      <div>
        <div className='text-2xl font-bold mb-4 ml-6'>Intermediate</div>
        <div className='p-6'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ModuleLink level="intermediate" moduleId={1} />
            <ModuleLink level="intermediate" moduleId={2} />
            <ModuleLink level="intermediate" moduleId={3} />
            <ModuleLink level="intermediate" moduleId={4} />
          </div>
        </div>
      </div>

      <div>
        <div className='text-2xl font-bold mb-4 ml-6'>Advanced</div>
        <div className='p-6'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ModuleLink level="advanced" moduleId={1} />
            <ModuleLink level="advanced" moduleId={2} />
            <ModuleLink level="advanced" moduleId={3} />
            <ModuleLink level="advanced" moduleId={4} />
            <ModuleLink level="advanced" moduleId={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleLink({ level, moduleId }) {
  return (
    <>
    <div className="bg-white shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500">
      <NavLink to={`/dashboard/${level}/${moduleId}`} className="flex justify-center items-center gap-4">
        Module {moduleId}
      </NavLink>

    </div>
    </>
  
  );
}

export default Learn;
