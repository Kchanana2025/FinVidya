import React from 'react';
import VideoEmbed from '../../VideoEmbed';
import { NavLink } from 'react-router-dom';

const BeginnerModule2 = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <NavLink to="/dashboard/beginner/2-hindi" className="text-blue-500 hover:underline">
          Read In Hindi &rarr;
        </NavLink>
      <h1 className="text-3xl font-bold mb-4">Chapter 2: Banking and Saving</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Types of Bank Accounts</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Savings Account</h3>
          <p className="mb-2">
            Savings accounts are deposit accounts for saving money. An Aadhaar card and PAN card are required to open one. No limit on savings amount; however, a minimum balance is often required, except for accounts under the PMJDY scheme, which allows zero balance.
          </p>
          <p className="mb-2">
            <strong>Interest:</strong> Varies by bank. Example: SBI offers 2.70% up to ₹1 lakh, HDFC offers 3% below ₹50 lakh.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Current Account</h3>
          <p className="mb-2">
            Current accounts are for frequent transactions, suitable for businesses. No transaction limits, higher minimum balance required, and no interest earned. Allows overdraft facility.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Salary Account</h3>
          <p className="mb-2">
            Salary accounts are opened by employers for employees to receive salaries. Zero balance required, no interest earned. Can be converted to savings accounts if inactive for over three months.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">NRI Accounts</h3>
          <p className="mb-2">
            NRO: For income earned in India, taxable interest.
          </p>
          <p className="mb-2">
            NRE: For income earned abroad, tax-free interest.
          </p>
          <p className="mb-2">
            FCNR: Fixed deposit in foreign currency, tax-free interest.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Recurring Deposit (RD) Account</h3>
          <p className="mb-2">
            RDs allow monthly deposits with higher interest rates than savings accounts. Flexible tenure from 6 months to 10 years. Can be discontinued early without losing interest.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Fixed Deposit (FD) Account</h3>
          <p className="mb-2">
            FDs are for lump sum deposits with fixed tenure. Higher interest rates than savings accounts and RDs. Early withdrawal may result in losing interest.
          </p>
        </div>

        <VideoEmbed videoId="Vl4PUQwHHNg" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How Interest Works</h2>
        <p className="mb-4">
          Interest is the cost of using money. Earn interest on savings, pay interest on loans.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Simple Interest</h3>
          <p className="mb-2">
            Calculated on the principal amount: <strong>Interest = Principal x Rate x Time</strong>.
          </p>
          <p className="mb-2">
            <strong>Example:</strong> ₹10,000 at 5% annual interest earns ₹500 in one year.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Compound Interest</h3>
          <p className="mb-2">
            Calculated on principal and accumulated interest: <strong>A = P(1 + r/n)^(nt)</strong>.
          </p>
          <p className="mb-2">
            <strong>Example:</strong> ₹10,000 at 5% annual interest earns ₹10,500 after one year, ₹11,025 after two years.
          </p>
        </div>

        <VideoEmbed videoId="0F7pYIGdr5U" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Building an Emergency Fund</h2>
        <p className="mb-4">
          An emergency fund covers unexpected expenses. Aim for three to six months' worth of living expenses.
        </p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Steps to Build an Emergency Fund</h3>
          <ol className="list-decimal pl-5">
            <li className="mb-2"><strong>Set a Goal:</strong> Calculate your monthly expenses and set a target amount.</li>
            <li className="mb-2"><strong>Create a Budget:</strong> Cut expenses and allocate savings to the fund.</li>
            <li className="mb-2"><strong>Automate Savings:</strong> Set up automatic transfers to your savings account.</li>
            <li className="mb-2"><strong>Use Windfalls:</strong> Direct unexpected income to the fund.</li>
          </ol>
          <p className="mt-2">
            <strong>Example:</strong> If your monthly expenses are ₹30,000, aim to save ₹90,000 to ₹1,80,000.
          </p>
        </div>

        <VideoEmbed videoId="g-hir-4WzfU" />
      </section>

      <section className="mb-2">
        <h2 className="text-2xl font-semibold mb-2">Conclusion and Next Steps</h2>
        <p className="mb-4">
          Understanding different types of bank accounts, how interest works, and the importance of an emergency fund are crucial steps towards financial stability.
        </p>
        <p className="mb-4">
          <strong>Next Steps:</strong>
          <ul className="list-disc pl-5">
            <li className="mb-2">Open a savings and checking account if you don't already have one.</li>
            <li className="mb-2">Start saving a portion of your income to build your emergency fund.</li>
            <li className="mb-2">Monitor the interest rates on your accounts to maximize your earnings.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Additional Resources</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2"><a href="https://www.investopedia.com/articles/basics/06/interestprimer.asp" target="_blank" className="text-blue-500 underline">Investopedia: Understanding Interest</a></li>
          <li className="mb-2"><a href="https://www.thebalance.com/emergency-fund-what-it-is-and-why-it-matters-2385693" target="_blank" className="text-blue-500 underline">The Balance: Building an Emergency Fund</a></li>
        </ul>
      </section>
      <div className="bg-white w-44 mt-9 shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500">
      <NavLink to={`/dashboard/beginner/3`} className="flex justify-center items-center gap-4">
        Next Module 
      </NavLink>
    </div>
    </div>
  );
};

export default BeginnerModule2;
