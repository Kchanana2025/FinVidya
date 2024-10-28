import React from 'react';
import VideoEmbed from '../../VideoEmbed';
import { NavLink } from 'react-router-dom';

const BeginnerModule4 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-1">
      <NavLink to="/dashboard/beginner/4-hindi" className="text-blue-500 hover:underline">
          Read In Hindi &rarr;
        </NavLink>
      <h1 className="text-3xl font-bold mb-6">Chapter 4: Introduction to Investing</h1>

      <h2 className="text-2xl font-semibold mb-4">Difference Between Saving and Investing</h2>
      <p className="mb-4">
        Saving refers to setting aside money for future use, typically in a safe place like a savings account. Investing, on the other hand, involves using your money to purchase assets with the expectation that their value will grow over time, potentially generating higher returns.
      </p>
      <p className="mb-4">
        <strong>Saving:</strong> Low risk, lower returns, easily accessible.
      </p>
      <p className="mb-4">
        <strong>Investing:</strong> Higher risk, potentially higher returns, less accessible.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Basic Investment Options</h2>

      <h3 className="text-xl font-semibold mb-2">Stocks</h3>
      <p className="mb-4">
        Stocks represent ownership in a company. When you buy a stock, you become a shareholder and own a portion of the company. Stocks can offer high returns, but they also come with higher risk.
      </p>

      <h3 className="text-xl font-semibold mb-2">Bonds</h3>
      <p className="mb-4">
        Bonds are loans made to corporations or governments in exchange for periodic interest payments and the return of the bond's face value when it matures. Bonds are generally considered safer than stocks but offer lower returns.
      </p>

      <h3 className="text-xl font-semibold mb-2">Mutual Funds</h3>
      <p className="mb-4">
        Mutual funds pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities. They provide diversification and professional management, making them a popular choice for individual investors.
      </p>

      {/* Embed YouTube video about basic investment options */}
      <VideoEmbed videoId="qIw-yFC-HNU" className="mb-6"/> {/* Replace with your YouTube video ID */}

      <h2 className="text-2xl font-semibold mb-4">Risk and Return</h2>
      <p className="mb-4">
        Risk and return are directly related in investing. Higher potential returns usually come with higher risks. Understanding your risk tolerance and investment goals is crucial for choosing the right investments.
      </p>
      <p className="mb-4">
        <strong>Low Risk:</strong> Savings accounts, government bonds.
      </p>
      <p className="mb-4">
        <strong>Moderate Risk:</strong> Corporate bonds, mutual funds.
      </p>
      <p className="mb-4">
        <strong>High Risk:</strong> Stocks, cryptocurrencies.
      </p>

      {/* Embed YouTube video about risk and return */}
      <VideoEmbed videoId="4KGvoy_Ke9Y" className="mb-6"/> {/* Replace with your YouTube video ID */}

      <h2 className="text-2xl font-semibold mb-4">Conclusion and Next Steps</h2>
      <p className="mb-4">
        Understanding the difference between saving and investing, knowing basic investment options, and recognizing the relationship between risk and return are essential for making informed financial decisions.
      </p>
      <p className="mb-4">
        <strong>Next Steps:</strong>
        <ul className="list-disc list-inside">
          <li>Evaluate your financial goals and risk tolerance.</li>
          <li>Research different investment options and consider diversifying your portfolio.</li>
          <li>Start with a small investment and gradually increase as you become more comfortable.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
      <ul className="list-disc list-inside">
        <li><a href="https://www.investopedia.com/articles/basics/06/invest1000.asp" target="_blank" className="text-blue-500">Investopedia: How to Invest</a></li>
        <li><a href="https://www.thebalance.com/investing-101-357508" target="_blank" className="text-blue-500">The Balance: Investing 101</a></li>
      </ul>

      <div className="bg-white w-44 mt-9 shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500">
      <NavLink to={`/dashboard/beginner/5`} className="flex justify-center items-center gap-4">
        Next Module 
      </NavLink>
    </div>


    </div>
  );
};

export default BeginnerModule4;
