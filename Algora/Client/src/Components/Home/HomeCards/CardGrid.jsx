import React from 'react';
import CardComponent from './CardComponent';
import Card_1_Img from './image/card-1.jpg';
import Card_2_Img from './image/card-2.jpg';
import Card_3_Img from './image/card-3.jpg';

const CardGrid = () => {
  const cardData = [
    {
      title: <>{''} <span className='font-bold p-1 rounded-md bg-green-300 text-black px-2'>Personalized Investment Portfolios</span>{''}</>,
      description: 'Our platform generates personalized investment portfolio recommendations tailored to your unique needs by assesing your risk profile. Discover your financial path today! 🌟',
      backgroundColor: 'bg-gray-800 text-white',
      imgSrc: Card_1_Img,
    },
    {
      title: <>{''} <span className='font-bold p-1 rounded-md bg-gray-800 text-white px-2'>Leverage Cutting-Edge Technology</span>{''}</>,
      description: 'Our platform uses sophisticated  algorithms and data analysis to provide you with accurate, reliable investment advice.',
      backgroundColor: 'bg-[#B9FF66]',
      imgSrc: Card_2_Img,
    },
    {
      title: <>{''} <span className='font-bold p-1 rounded-md bg-green-300 text-black px-2'>Accessible and Affordable</span>{''}</>,
      description: 'FinVidya offers affordable investment advisory services, making professional financial guidance accessible to individuals with small investment amounts.',
      backgroundColor: 'bg-gray-800 text-white',
      imgSrc: Card_3_Img,
    },
    // {
    //   title: 'Email Marketing',
    //   description: 'Keep your users informed and engaged with personalized email marketing campaigns.',
    //   backgroundColor: 'bg-gray-100',
    //   imgSrc: '/path-to-email-marketing-image.png',
    // },
    // {
    //   title: 'Content Creation',
    //   description: 'Deliver valuable content that educates and empowers your audience with our content creation services.',
    //   backgroundColor: 'bg-green-100',
    //   imgSrc: '/path-to-content-creation-image.png',
    // },
    // {
    //   title: 'Analytics and Tracking',
    //   description: 'Monitor your investment performance and make data-driven decisions with our analytics tools.',
    //   backgroundColor: 'bg-gray-800 text-white',
    //   imgSrc: '/path-to-analytics-image.png',
    // },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cardData.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
