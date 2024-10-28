import { NavLink } from "react-router-dom";
import VideoEmbed from "../../VideoEmbed";

function IntermediateModule2() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Module 2: Advanced Budgeting and Saving</h2>
      <VideoEmbed videoId="YourVideoIDHere" />
      
      {/* Introduction */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Introduction</h3>
        <p>This module is designed for intermediate investors who want to enhance their budgeting and saving strategies. It covers detailed budgeting techniques, high-interest savings accounts, and automation of savings to maximize financial growth.</p>
      </div>

      {/* Detailed Budgeting Techniques */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">1. Detailed Budgeting Techniques</h3>
        
        <div className="mb-4">
          <p><strong>1.1 Zero-Based Budgeting (ZBB)</strong></p>
          <p><strong>Concept:</strong> Allocating every dollar of income to specific expenses, savings, or debt repayments, ensuring the total income minus the total expenses equals zero.</p>
          <p><strong>Steps:</strong></p>
          <ol className="list-decimal ml-6">
            <li>Calculate total monthly income.</li>
            <li>List all monthly expenses.</li>
            <li>Assign each dollar of income to a category until the income is fully allocated.</li>
            <li>Adjust as necessary to ensure balance.</li>
          </ol>
        </div>

        <div className="mb-4">
          <p><strong>1.2 Envelope System</strong></p>
          <p><strong>Concept:</strong> Using physical envelopes or digital equivalents to allocate specific amounts of cash for different spending categories.</p>
          <p><strong>Steps:</strong></p>
          <ol className="list-decimal ml-6">
            <li>Define budget categories (e.g., groceries, entertainment).</li>
            <li>Allocate cash to each envelope based on budget.</li>
            <li>Spend only the allocated cash for each category.</li>
          </ol>
        </div>

        <div className="mb-4">
          <p><strong>1.3 50/30/20 Rule</strong></p>
          <p><strong>Concept:</strong> Dividing after-tax income into three categories: 50% for needs, 30% for wants, and 20% for savings and debt repayment.</p>
          <p><strong>Steps:</strong></p>
          <ol className="list-decimal ml-6">
            <li>Calculate after-tax income.</li>
            <li>Allocate 50% to essential expenses (rent, utilities, groceries).</li>
            <li>Allocate 30% to discretionary spending (dining out, hobbies).</li>
            <li>Allocate 20% to savings and debt repayment.</li>
          </ol>
        </div>

        <div className="mb-4">
          <p><strong>1.4 Budgeting Tools and Apps</strong></p>
          <p><strong>Popular Tools:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>You Need a Budget (YNAB):</strong> Encourages proactive planning and tracking of expenses.</li>
            <li><strong>Mint:</strong> Offers budget tracking, bill reminders, and credit score monitoring.</li>
            <li><strong>Personal Capital:</strong> Combines budgeting with investment tracking.</li>
          </ul>
        </div>
      </div>

      {/* High-Interest Savings Accounts */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">2. High-Interest Savings Accounts</h3>
        
        <div className="mb-4">
          <p><strong>2.1 Understanding High-Interest Savings Accounts</strong></p>
          <p><strong>Definition:</strong> Savings accounts that offer higher interest rates compared to regular savings accounts.</p>
          <p><strong>Benefits:</strong></p>
          <ul className="list-disc ml-6">
            <li>Higher returns on savings.</li>
            <li>Often have no minimum balance requirements.</li>
            <li>FDIC insurance provides security.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>2.2 Finding the Best High-Interest Savings Accounts</strong></p>
          <p><strong>Comparison Factors:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Interest Rate:</strong> Look for competitive rates.</li>
            <li><strong>Fees:</strong> Avoid accounts with high maintenance fees.</li>
            <li><strong>Accessibility:</strong> Ensure easy access to funds (online banking, ATMs).</li>
            <li><strong>Customer Service:</strong> Evaluate the quality of customer support.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>2.3 Maximizing Returns</strong></p>
          <p><strong>Strategies:</strong></p>
          <ul className="list-disc ml-6">
            <li>Regularly compare rates to ensure you are getting the best deal.</li>
            <li>Use multiple accounts if necessary to maximize interest earned.</li>
            <li>Set up automatic transfers from your checking account to your high-interest savings account.</li>
          </ul>
        </div>
      </div>

      {/* Automating Savings */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">3. Automating Savings</h3>
        
        <div className="mb-4">
          <p><strong>3.1 Benefits of Automating Savings</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Consistency:</strong> Ensures regular savings contributions.</li>
            <li><strong>Convenience:</strong> Reduces the need for manual transfers.</li>
            <li><strong>Discipline:</strong> Encourages saving before spending.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>3.2 Setting Up Automated Savings</strong></p>
          <p><strong>Steps:</strong></p>
          <ol className="list-decimal ml-6">
            <li><strong>Choose Savings Goals:</strong> Define what you are saving for (emergency fund, vacation, investments).</li>
            <li><strong>Select Savings Account:</strong> Open a dedicated savings account for each goal.</li>
            <li><strong>Set Up Automatic Transfers:</strong> Schedule regular transfers from your checking account to your savings accounts.</li>
          </ol>
        </div>

        <div className="mb-4">
          <p><strong>3.3 Tools for Automating Savings</strong></p>
          <p><strong>Banking Features:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Automatic Transfers:</strong> Set up through your bank’s online platform.</li>
            <li><strong>Round-Up Programs:</strong> Some banks offer programs that round up purchases to the nearest dollar and transfer the difference to savings.</li>
          </ul>
          <p><strong>Apps:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Acorns:</strong> Invests spare change by rounding up purchases.</li>
            <li><strong>Qapital:</strong> Allows you to set savings rules (e.g., save $5 every time you skip a coffee).</li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Conclusion</h3>
        <p>By mastering advanced budgeting techniques, utilizing high-interest savings accounts, and automating your savings, you can significantly enhance your financial health. Implement these strategies consistently to achieve your financial goals more efficiently.</p>
      </div>

      {/* Additional Resources */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Additional Resources</h3>
        <p>To further enhance your understanding of advanced budgeting and saving, consider exploring the following resources:</p>
        <ul className="list-disc ml-6">
          <li><strong>Books:</strong> "Your Money or Your Life" by Vicki Robin, "The Total Money Makeover" by Dave Ramsey</li>
          <li><strong>Websites:</strong> Investopedia, NerdWallet</li>
          <li><strong>Videos:</strong> Financial literacy channels on YouTube (e.g., The Financial Diet, Graham Stephan)</li>
        </ul>
      </div>

      {/* Quiz and Exercises */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Quiz and Exercises</h3>
        <p>Test your understanding of the budgeting techniques and savings strategies discussed:</p>
        <ul className="list-disc ml-6">
          <li><strong>Quiz:</strong> Answer questions related to the content covered in this module.</li>
          <li><strong>Exercises:</strong> Practical exercises to create your own detailed budget and set up automated savings.</li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between mt-6">
        <NavLink to="/dashboard/intermediate/1" className="text-blue-500 hover:underline">
          &larr; Previous Module
        </NavLink>
        <NavLink to="/dashboard/intermediate/3" className="text-blue-500 hover:underline">
          Next Module &rarr;
        </NavLink>
      </div>
    </div>
  );
}

export default IntermediateModule2;
