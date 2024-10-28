import React from 'react';
import VideoEmbed from '../../VideoEmbed';
import { NavLink } from 'react-router-dom';

const BeginnerModule5 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg mt-1 ">
      <NavLink to="/dashboard/beginner/5-hindi" className="text-blue-500 hover:underline">
          Read In Hindi &rarr;
        </NavLink>
      <h1 className="text-3xl font-bold mb-6">Chapter 5: Financial Planning</h1>

      <h2 className="text-2xl font-semibold mb-4">Setting Financial Goals</h2>
      <p className="mb-4">
        Setting financial goals is the first step towards achieving financial security and independence. Goals should be Specific, Measurable, Achievable, Relevant, and Time-bound (SMART).
      </p>
      <p className="mb-4">
        <strong>Short-term goals:</strong> Saving for an emergency fund, paying off credit card debt.
      </p>
      <p className="mb-4">
        <strong>Mid-term goals:</strong> Saving for a down payment on a house, paying for a wedding.
      </p>
      <p className="mb-4">
        <strong>Long-term goals:</strong> Retirement planning, saving for children's education.
      </p>

      {/* Embed YouTube video about setting financial goals */}
      <VideoEmbed videoId="SzgwRuKvC0c" className="mb-6"/> {/* Replace with your YouTube video ID */}

      <h2 className="text-2xl font-semibold mb-4">Importance of Insurance</h2>
      <p className="mb-4">
        Insurance is a critical component of financial planning as it protects you and your family from financial losses due to unforeseen events. Different types of insurance include:
      </p>
      <p className="mb-4">
        <strong>Health Insurance:</strong> Covers medical expenses and protects against high healthcare costs.
      </p>
      <p className="mb-4">
        <strong>Life Insurance:</strong> Provides financial support to your dependents in case of your untimely death.
      </p>
      <p className="mb-4">
        <strong>Auto Insurance:</strong> Covers damages and liabilities from car accidents.
      </p>
      <p className="mb-4">
        <strong>Home Insurance:</strong> Protects your home and personal property against damage or theft.
      </p>

      {/* Embed YouTube video about importance of insurance */}
      <VideoEmbed videoId="75NOoijgjZE" className="mb-6"/> {/* Replace with your YouTube video ID */}

      <h2 className="text-2xl font-semibold mb-4">Basics of Retirement Planning</h2>
      <p className="mb-4">
        Retirement planning involves determining retirement income goals and the actions needed to achieve those goals. Key components include:
      </p>
      <p className="mb-4">
        <strong>Starting Early:</strong> The sooner you start saving for retirement, the more you can benefit from compound interest.
      </p>
      <p className="mb-4">
        <strong>Retirement Accounts:</strong> Contributing to retirement accounts like EPF, PPF, NPS, and IRAs can provide tax advantages and grow your savings.
      </p>
      <p className="mb-4">
        <strong>Diversification:</strong> Diversifying your investments across different asset classes (stocks, bonds, mutual funds) can help manage risk.
      </p>
      <p className="mb-4">
        <strong>Regular Review:</strong> Regularly reviewing and adjusting your retirement plan ensures you stay on track to meet your goals.
      </p>

      {/* Embed YouTube video about basics of retirement planning */}
      <VideoEmbed videoId="7re-iR0AHX4" className="mb-6"/> {/* Replace with your YouTube video ID */}

      <h2 className="text-2xl font-semibold mb-4">Conclusion and Next Steps</h2>
      <p className="mb-4">
        Financial planning is essential for achieving financial security and independence. By setting financial goals, understanding the importance of insurance, and planning for retirement, you can create a solid financial foundation.
      </p>
      <p className="mb-4">
        <strong>Next Steps:</strong>
        <ul className="list-disc list-inside">
          <li>Set SMART financial goals and track your progress.</li>
          <li>Evaluate your insurance needs and ensure you have adequate coverage.</li>
          <li>Start or review your retirement plan and make necessary adjustments.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
      <ul className="list-disc list-inside">
        <li><a href="https://www.investopedia.com/articles/personal-finance/090316/how-set-financial-goals.asp" target="_blank" className="text-blue-500">Investopedia: How to Set Financial Goals</a></li>
        <li><a href="https://www.thebalance.com/understanding-the-basics-of-insurance-2388841" target="_blank" className="text-blue-500">The Balance: Understanding the Basics of Insurance</a></li>
        <li><a href="https://www.nerdwallet.com/article/investing/retirement-planning-guide" target="_blank" className="text-blue-500">NerdWallet: Retirement Planning Guide</a></li>
      </ul>
    </div>
  );
};

export default BeginnerModule5;
