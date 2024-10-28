import React from 'react';

const CardComponent = ({ title, description, backgroundColor, imgSrc }) => {
  return (
    <div className={`rounded-lg overflow-hidden text-black transform transition-transform hover:scale-105 ${backgroundColor}`}>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 h-28">{description}</p>
        <img className="w-full h-40 object-cover  mt-4" src={imgSrc} alt={title} />
      </div>
      <div className="p-6">
        <a href="#" className="text-blue-500 font-bold flex items-center">
          Learn more
          <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
