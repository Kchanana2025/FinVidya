import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import user_image from '../MainContent/user_image.png';

const FinancialLiteracyResultCard = () => {
  const { user } = useUser();
  const [personality, setPersonality] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonalityType = async () => {
      try {
        const response = await fetch(`http://localhost:5005/user-literacy/${user.id}`);
        const data = await response.json();

        if (response.ok) {
          setPersonality(data.courseType);
        } else {
          throw new Error(data.message || 'Failed to fetch personality type');
        }
      } catch (error) {
        console.error('Error fetching personality type:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchPersonalityType();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!user || !personality) {
    return <div>No data available</div>; // Render a message when there is no user or personality data
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
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Financial Literacy Analysis</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{user.fullName}</h1>
          <p className="mt-2 text-gray-500">Suggested Course Type: {personality}</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialLiteracyResultCard;
