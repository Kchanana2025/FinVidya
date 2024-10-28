import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async () => {
    onSearch(searchInput);
  };

  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter search keywords"
        className="px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
      />
      <button
        onClick={handleSearch}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
