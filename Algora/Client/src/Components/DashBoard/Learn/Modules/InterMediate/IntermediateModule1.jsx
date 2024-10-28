import React from 'react';
import { NavLink } from 'react-router-dom';

const IntermediateModule1 = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white mt-3 p-6 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tax Planning for Intermediate Investors</h2>

      {/* Introduction */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Introduction</h3>
        <p className="text-gray-600 leading-relaxed">
          This module provides an overview of tax planning essentials for intermediate investors. It covers basic concepts
          of tax planning, tax-advantaged accounts, and strategies for tax-efficient investing, crucial for optimizing
          financial outcomes.
        </p>
      </section>

      {/* Basics of Tax Planning */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">1. Basics of Tax Planning</h3>

        {/* Understanding Tax Planning */}
        <div className="mb-4">
          <h4 className="text-base font-semibold text-gray-600 mb-2">1.1 Understanding Tax Planning</h4>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold">Definition:</span> Strategic management of financial affairs to minimize tax
            liability and maximize after-tax income. <br />
            <span className="font-semibold">Importance:</span> Helps optimize financial decisions and preserve wealth
            through legal tax-saving strategies.
          </p>
        </div>

        {/* Key Tax Considerations */}
        <div className="mb-4">
          <h4 className="text-base font-semibold text-gray-600 mb-2">1.2 Key Tax Considerations</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Taxable Income: Gross income minus deductions and exemptions.</li>
            <li>Tax Deductions: Expenses that reduce taxable income (e.g., mortgage interest, charitable
              contributions).</li>
            <li>Tax Credits: Direct reductions in tax liability (e.g., child tax credit, education credits).</li>
            <li>Capital Gains Tax: Tax on profits from the sale of investments or property.</li>
          </ul>
        </div>
      </section>

      {/* Tax-Advantaged Accounts */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">2. Tax-Advantaged Accounts</h3>

        {/* Types of Tax-Advantaged Accounts */}
        <div className="mb-4">
          <h4 className="text-base font-semibold text-gray-600 mb-2">2.1 Types of Tax-Advantaged Accounts</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <span className="font-semibold">Traditional IRA:</span> Contributions may be tax-deductible, and earnings
              grow tax-deferred. Withdrawals in retirement are taxed as ordinary income.
            </li>
            <li>
              <span className="font-semibold">Roth IRA:</span> Contributions are made after-tax, and qualified
              withdrawals in retirement are tax-free. Offers flexibility with contributions and withdrawals.
            </li>
            <li>
              <span className="font-semibold">Health Savings Account (HSA):</span> Contributions are tax-deductible or
              pre-tax (if through employer). Funds grow tax-free, and withdrawals for qualified medical expenses are
              tax-free.
            </li>
            <li>
              <span className="font-semibold">529 College Savings Plan:</span> Contributions are made after-tax, but
              earnings grow tax-free. Withdrawals for qualified education expenses are tax-free.
            </li>
          </ul>
        </div>

        {/* Benefits of Tax-Advantaged Accounts */}
        <div className="mb-4">
          <h4 className="text-base font-semibold text-gray-600 mb-2">2.2 Benefits of Tax-Advantaged Accounts</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Tax Deferral or Exemption: Reduce current taxable income or enjoy tax-free growth.</li>
            <li>Long-Term Savings Growth: Capitalize on compound interest and growth without immediate tax consequences.</li>
            <li>Strategic Use: Choose accounts based on eligibility, income level, and financial goals.</li>
          </ul>
        </div>
      </section>

      {/* Tax-Efficient Investing */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">3. Tax-Efficient Investing</h3>

        {/* Strategies for Tax-Efficient Investing */}
        <div className="mb-4">
          <h4 className="text-base font-semibold text-gray-600 mb-2">3.1 Strategies for Tax-Efficient Investing</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Asset Location: Place tax-inefficient investments (high turnover funds) in tax-advantaged accounts.</li>
            <li>Tax-Loss Harvesting: Offset gains with losses to minimize taxes.</li>
            <li>Dividend Investing: Focus on qualified dividends taxed at lower rates.</li>
            <li>Hold for Long-Term: Benefit from lower long-term capital gains tax rates by holding investments for more
              than a year.</li>
          </ul>
        </div>

        {/* Considerations for Tax Efficiency */}
        <div className="mb-4">
          <h4 className="text-base font-semibold text-gray-600 mb-2">3.2 Considerations for Tax Efficiency</h4>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-semibold">Income Shifting:</span> Utilize tax strategies to manage income levels
            year-to-year. <br />
            <span className="font-semibold">Qualified Dividends vs. Ordinary Income:</span> Understand the tax implications
            of different types of income. <br />
            <span className="font-semibold">Avoiding Short-Term Gains:</span> Minimize short-term capital gains taxed at
            higher rates.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Conclusion</h3>
        <p className="text-gray-600 leading-relaxed">
          Effective tax planning involves understanding tax fundamentals, leveraging tax-advantaged accounts, and implementing
          strategies for tax-efficient investing. By applying these principles, intermediate investors can optimize their
          financial strategies and achieve long-term wealth preservation and growth.
        </p>
      </section>

      {/* Additional Resources */}
      <section>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Additional Resources</h3>
        <div className="text-gray-600">
          <p>Books:</p>
          <ul className="list-disc list-inside">
            <li>"Tax-Free Wealth" by Tom Wheelwright</li>
            <li>"The Power of Zero" by David McKnight</li>
          </ul>
          <p>Websites:</p>
          <ul className="list-disc list-inside">
            <li>IRS.gov for tax rules and updates</li>
            <li>Morningstar for investment tax strategies</li>
          </ul>
          <p>Videos:</p>
          <ul className="list-disc list-inside">
            <li>Financial literacy channels on YouTube (e.g., The Plain Bagel, The Money Guy Show)</li>
          </ul>
        </div>
        <div className="flex justify-between mt-6">
        <NavLink to="/dashboard/intermediate/2" className="text-blue-500 hover:underline">
          Next Module &rarr;
        </NavLink>
      </div>
      </section>
    </div>
  );
};

export default IntermediateModule1;
