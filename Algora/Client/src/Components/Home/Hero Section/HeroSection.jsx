import React from 'react';
import image from './image/hero-section.png';
import SignUpButton from '../Login/SignUpButton';

function HeroSection() {
  return (
    <>
      <div className="wrapper flex flex-col-reverse md:flex-row w-full h-full p-5 md:p-6 md:space-among">
        <div className="text-content md:w-1/2 w-full p-5 md:p-2 md:mt-28">
          <p className='text-4xl md:text-6xl text-center font-semibold mt-5 md:mt-16 leading-tight md:leading-tight'>
            Take Control of Your <br />
            <span className='bg-green-300 p-1 md:p-1 rounded-xl '>Financial Future</span> with <br /> FinVidya
          </p>
          <p className='text-base md:text-lg text-center font-medium mt-2 md:mt-4 leading-tight'>
            Personalized Investment Advice at Your Fingertips
          </p>
          <div className='flex justify-center mt-3 md:mt-5'>
            <SignUpButton />
          </div>
        </div>
        <div className="image md:w-1/2 w-full mt-5 md:mt-0 flex justify-center md:justify-center md:relative">
          <img src={image} className='w-2/3 md:w-full md:h-full object-center object-contain' alt="Hero Section" />
        </div>
      </div>
      <div className="end h-16 w-full flex items-center justify-center mt-8 mb-4">
        <p className='text-sm md:text-lg font-semibold text-zinc-900 p-4'>
          🚀 Supported and <span className='bg-green-300 p-1 md:p-2 rounded-xl'>Trusted</span> by Top Stock Brokers in India! 📈
        </p>
      </div>
    </>
  );
}

export default HeroSection;
