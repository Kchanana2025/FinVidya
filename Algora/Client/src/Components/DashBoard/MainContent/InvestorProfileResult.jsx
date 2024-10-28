import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import user_image from '../MainContent/user_image.png';
import { NavLink } from 'react-router-dom';

const InvestorProfileResult = () => {
  const { user } = useUser();
  const [personality, setPersonality] = useState(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchPersonalityType = async () => {
      try {
        const response = await fetch(`http://localhost:5005/quizResults/${user.id}`);
        const data = await response.json();
        if (data && data.length > 0) {
          setPersonality(data[0].personalityType);
          setUrl(data[0].redirectUrl);
        }
      } catch (error) {
        console.error('Error fetching personality type:', error);
      }
    };

    fetchPersonalityType();
  }, [user.id]);

  if (!personality) {
    return null; // If personality data is not available, do not render anything
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={user.profileImageUrl ? user.profileImageUrl : user_image}
            alt={`${user.fullName}'s profile`}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Investor Personality Analysis</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{user.fullName}</h1>
          <p className="mt-2 text-gray-500">Investor Personality Type: {personality}</p>
          <NavLink to={`/dashboard/${url}`} className="mt-2 text-blue-500">Learn more</NavLink>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfileResult;
