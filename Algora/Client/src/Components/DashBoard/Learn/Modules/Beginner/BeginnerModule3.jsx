import React from 'react';
import VideoEmbed from '../../VideoEmbed';
import { NavLink } from 'react-router-dom';

const BeginnerModule3 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg mt-2">
      <NavLink to="/dashboard/beginner/3-hindi" className="text-blue-500 hover:underline">
          Read In Hindi &rarr;
        </NavLink>
      <h1 className="text-3xl font-bold mb-6">Chapter 3: Managing Debt</h1>

      <h2 className="text-2xl font-semibold mb-4">Types of Debt</h2>
      
      <h3 className="text-xl font-semibold mb-2">Good Debt</h3>
      <p className="mb-4">
        Good debt is an investment that will grow in value or generate long-term income. Examples include student loans, mortgages, and business loans. These types of debt can help you increase your net worth.
      </p>

      <h3 className="text-xl font-semibold mb-2">Bad Debt</h3>
      <p className="mb-4">
        Bad debt refers to money borrowed to purchase depreciating assets or for consumption, such as credit card debt or personal loans for discretionary expenses. These do not provide long-term financial benefits and can lead to financial strain.
      </p>

      {/* Embed YouTube video about types of debt */}
      <VideoEmbed videoId="B5nDFRFSHkc" className="mb-6"/> {/* Replace with your YouTube video ID */}

      <h2 className="text-2xl font-semibold mb-4">Credit Scores and Their Importance</h2>
      <p className="mb-4">
        A credit score is a numerical expression based on a level analysis of a person's credit files, representing the creditworthiness of an individual. Lenders use credit scores to evaluate the probability that an individual will repay their debts.
      </p>
      <p className="mb-4">
        A higher credit score can help you qualify for lower interest rates on loans and credit cards, which can save you money over time.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Strategies for Paying Off Debt</h2>
      <h3 className="text-xl font-semibold mb-2">Debt Snowball Method</h3>
      <p className="mb-4">
        The Debt Snowball Method involves paying off your smallest debts first while making minimum payments on larger debts. This approach builds momentum as you eliminate debts, which can be motivating.
      </p>
      <h3 className="text-xl font-semibold mb-2">Debt Avalanche Method</h3>
      <p className="mb-4">
        The Debt Avalanche Method focuses on paying off debts with the highest interest rates first while making minimum payments on others. This method can save you more money in interest over time.
      </p>
      <h3 className="text-xl font-semibold mb-2">Consolidation</h3>
      <p className="mb-4">
        Debt consolidation involves combining multiple debts into a single loan with a lower interest rate. This can simplify your payments and potentially reduce your overall interest costs.
      </p>

      {/* Embed YouTube video about paying off debt */}
      <VideoEmbed videoId="YSihe9BEV5Q" className="mb-6"/> {/* Replace with your YouTube video ID */}

      <h2 className="text-2xl font-semibold mb-4">Conclusion and Next Steps</h2>
      <p className="mb-4">
        Understanding the types of debt, the importance of credit scores, and effective strategies for paying off debt are crucial for maintaining financial health.
      </p>
      <p className="mb-4">
        <strong>Next Steps:</strong>
        <ul className="list-disc list-inside">
          <li>Review your current debts and categorize them as good or bad.</li>
          <li>Check your credit score and take steps to improve it if necessary.</li>
          <li>Choose a debt repayment strategy that works best for your situation and start implementing it.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
      <ul className="list-disc list-inside">
        <li><a href="https://www.investopedia.com/articles/personal-finance/070915/debt-snowball-vs-debt-avalanche-which-best-you.asp" target="_blank" className="text-blue-500">Investopedia: Debt Snowball vs. Debt Avalanche</a></li>
        <li><a href="https://www.thebalance.com/what-is-a-good-credit-score-960514" target="_blank" className="text-blue-500">The Balance: What is a Good Credit Score?</a></li>
      </ul>
    </div>
  );
};

export default BeginnerModule3;
