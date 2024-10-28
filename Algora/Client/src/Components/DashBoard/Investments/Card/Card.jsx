// FundCard.jsx
import React from 'react';

const Card = ({ image, title, returnRate, period ,link}) => {
  return (
    <a href={link}>
        <div className="border rounded-lg p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-16 h-16 object-cover mb-4" />
      <h3 className="text-sm font-medium text-center">{title}</h3>
      <p className="text-lf font-bold mt-2">{returnRate}%</p>
      <p className="text-gray-500 text-sm">{period}</p>
    </div>
    </a>
  );
};

export default Card;
