import { NavLink } from "react-router-dom";
import VideoEmbed from "../../VideoEmbed";

function BeginnerModule1() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <NavLink to="/dashboard/beginner/1-hindi" className="text-blue-500 hover:underline">
          Read In Hindi &rarr;
        </NavLink>
      <h2 className="text-2xl font-bold mb-4">Chapter 1: Introduction to Personal Finance and Budgeting</h2>
      <VideoEmbed videoId="Fi_kMc6hLxI" />
      {/* The Importance of Personal Finance */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">The Importance of Personal Finance</h3>
        <p>
          Personal finance is a critical aspect of life that influences nearly every decision we make, from daily purchases to long-term investments. Despite its importance, many people struggle with managing their finances effectively. Understanding personal finance empowers you to make informed decisions, achieve financial stability, and build wealth over time.
        </p>
      </div>

      {/* Key Concepts and Terms */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Key Concepts and Terms</h3>
        <div className="mb-4">
          <p><strong>Income</strong></p>
          <p><strong>Definition:</strong> The money you receive, usually from jobs, investments, or other sources.</p>
          <p><strong>Example:</strong> If you earn a salary of ₹60,000 per month, this is your income.</p>
          <p><strong>Use Case:</strong> Knowing your income helps you create a realistic budget and set achievable financial goals.</p>
        </div>
        <div className="mb-4">
          <p><strong>Expenses</strong></p>
          <p><strong>Definition:</strong> Money spent on goods, services, bills, and other financial obligations.</p>
          <p><strong>Example:</strong> Monthly expenses might include rent, groceries, utilities, and entertainment.</p>
          <p><strong>Use Case:</strong> Tracking expenses ensures you dont spend more than you earn and helps identify areas where you can save.</p>
        </div>
        <div className="mb-4">
          <p><strong>Budget</strong></p>
          <p><strong>Definition:</strong> A financial plan that outlines expected income and expenses over a specific period.</p>
          <p><strong>Example:</strong> Creating a monthly budget that allocates ₹15,000 for rent, ₹5,000 for groceries, and ₹2,000 for entertainment.</p>
          <p><strong>Use Case:</strong> A budget helps you control your finances, save for goals, and avoid debt.</p>
        </div>
        <div className="mb-4">
          <p><strong>Savings</strong></p>
          <p><strong>Definition:</strong> The portion of your income that you set aside for future use.</p>
          <p><strong>Example:</strong> Setting aside 10% of your monthly income into a savings account.</p>
          <p><strong>Use Case:</strong> Savings provide a safety net for emergencies and help you achieve financial goals like buying a house or retiring comfortably.</p>
        </div>
        <div className="mb-4">
          <p><strong>Investments</strong></p>
          <p><strong>Definition:</strong> Using money to purchase assets like stocks, bonds, or real estate with the expectation of earning a return.</p>
          <p><strong>Example:</strong> Investing in a diversified portfolio of stocks and bonds.</p>
          <p><strong>Use Case:</strong> Investments help grow your wealth over time and can provide additional income.</p>
        </div>
        <div className="mb-4">
          <p><strong>Debt</strong></p>
          <p><strong>Definition:</strong> Money that you owe to others, typically from loans or credit cards.</p>
          <p><strong>Example:</strong> Having a ₹50,000 credit card balance or a ₹4,00,000 student loan.</p>
          <p><strong>Use Case:</strong> Managing debt responsibly prevents financial stress and high interest payments.</p>
        </div>
        <div className="mb-4">
          <p><strong>Emergency Fund</strong></p>
          <p><strong>Definition:</strong> Savings reserved for unexpected expenses or financial emergencies.</p>
          <p><strong>Example:</strong> An emergency fund with three to six month worth of living expenses.</p>
          <p><strong>Use Case:</strong> An emergency fund ensures you are financially prepared for unforeseen events like medical emergencies or job loss.</p>
        </div>
      </div>

      {/* Creating a Budget */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Creating a Budget</h3>
        <p><strong>Step-by-Step Guide:</strong></p>
        <ol className="list-decimal ml-6">
          <li>Calculate Your Income: Include all sources of income, such as salary, freelance work, and investments. Example: Monthly salary: ₹60,000, Freelance work: ₹10,000, Total Income: ₹70,000</li>
          <li>List Your Expenses: Categorize your expenses into fixed (rent, bills) and variable (groceries, entertainment).</li>
          <li>Set Financial Goals: Short-term (vacation) and long-term (retirement) goals guide your saving and spending habits.</li>
          <li>Allocate Funds: Assign a portion of your income to each expense category and savings goal.</li>
          <li>Monitor and Adjust: Regularly review your budget and make adjustments as needed to stay on track. Example: After three months, review your spending to see if adjustments are needed to meet your goals.</li>
        </ol>
        <p><strong>Example Budget:</strong></p>
        <ul className="list-disc ml-6">
          <li>Income: ₹70,000/month</li>
          <li>Fixed Expenses: Rent (₹15,000), Utilities (₹2,000), Insurance (₹2,000)</li>
          <li>Variable Expenses: Groceries (₹5,000), Transportation (₹3,000), Entertainment (₹2,000)</li>
          <li>Savings: Emergency Fund (₹5,000), Retirement (₹8,000)</li>
          <li>Total Expenses and Savings: ₹42,000</li>
          <li>Remaining Balance: ₹28,000</li>
        </ul>
      </div>

      {/* Tips for Effective Budgeting */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Tips for Effective Budgeting</h3>
        <ul className="list-disc ml-6">
          <li>Track Spending: Use apps or a spreadsheet to track every expense. Example: Apps like Walnut or Money Manager can help you track and categorize your spending.</li>
          <li>Cut Unnecessary Expenses: Identify non-essential spending and reduce it. Example: If you notice you spend ₹2,000 a month on dining out, consider cooking more at home to save money.</li>
          <li>Automate Savings: Set up automatic transfers to your savings account. Example: Schedule an automatic transfer of ₹5,000 from your checking account to your savings account every month.</li>
          <li>Review Regularly: Check your budget monthly to ensure it aligns with your financial goals. Example: At the end of each month, compare your actual spending to your budget and adjust as needed.</li>
        </ul>
      </div>

      {/* Understanding Credit and Loans */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Understanding Credit and Loans</h3>
        <div className="mb-4">
          <p><strong>a. Credit Score</strong></p>
          <p><strong>Definition:</strong> A numerical representation of your creditworthiness.</p>
          <p><strong>Example:</strong> Credit scores range from 300 to 900, with higher scores indicating better credit.</p>
          <p><strong>Use Case:</strong> A high credit score helps you get better interest rates on loans and credit cards.</p>
        </div>
        <div className="mb-4">
          <p><strong>b. Types of Loans</strong></p>
          <ul className="list-disc ml-6">
            <li>Personal Loans: For general use, like home improvements or debt consolidation.</li>
            <li>Mortgage Loans: For purchasing a home.</li>
            <li>Student Loans: For funding education.</li>
            <li>Auto Loans: For buying a vehicle.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p><strong>c. Interest Rates</strong></p>
          <p><strong>Definition:</strong> The cost of borrowing money, expressed as a percentage of the loan amount.</p>
          <p><strong>Example:</strong> A personal loan with a 10% interest rate means you will pay 10% of the loan amount annually in interest.</p>
          <p><strong>Use Case:</strong> Lower interest rates reduce the total cost of loans and credit.</p>
        </div>
      </div>

      {/* Building and Maintaining Good Credit */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Building and Maintaining Good Credit</h3>
        <ul className="list-disc ml-6">
          <li>Pay Bills on Time: Late payments can hurt your credit score. Example: Set up automatic payments or reminders to ensure you never miss a payment.</li>
          <li>Keep Balances Low: Maintain a low balance on credit cards relative to their limits. Example: If your credit card limit is ₹1,00,000, try to keep your balance below ₹30,000.</li>
          <li>Avoid Unnecessary Debt: Only borrow what you can afford to repay. Example: Before taking out a loan, calculate your monthly payments and ensure they fit within your budget.</li>
          <li>Regularly Check Credit Reports: Ensure accuracy and correct any errors. Example: Obtain a free credit report annually from each of the three major credit bureaus (CIBIL, Experian, Equifax).</li>
        </ul>
      </div>

      {/* Conclusion and Next Steps */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Conclusion and Next Steps</h3>
        <p>Mastering personal finance and budgeting is a journey that requires continuous learning and discipline. By understanding the basics, you lay a strong foundation for financial stability and growth.</p>
        <p><strong>Next Steps:</strong></p>
        <ol className="list-decimal ml-6">
          <li>Start by tracking your income and expenses for a month.</li>
          <li>Create a simple budget and set short-term and long-term financial goals.</li>
          <li>Begin building an emergency fund and exploring investment options.</li>
        </ol>
      </div>

      {/* Additional Resources */}
      <div>
        <h3 className="text-xl font-bold mb-2">Additional Resources</h3>
        <p>To further enhance your understanding of personal finance and budgeting, consider exploring the following resources:</p>
        <ul className="list-disc ml-6">
          <li>Books: Rich Dad Poor Dad by Robert Kiyosaki, The Total Money Makeover by Dave Ramsey</li>
          <li>Websites: Investopedia, MoneyControl</li>
        </ul>
        <p>By taking these steps, you be well on your way to mastering personal finance and achieving your financial goals. Happy budgeting!</p>
      </div>
   

      <div className="bg-white w-44 mt-9 shadow py-4 px-2 rounded text-xl hover:scale-105 hover:cursor-pointer hover:transition hover:duration-300 hover:text-theme-green hover:bg-theme-dark border-2 border-slate-500">
      <NavLink to={`/dashboard/beginner/2`} className="flex justify-center items-center gap-4">
        Next Module 
      </NavLink>
    </div>

    </div>
    
  );
}

export default BeginnerModule1;
