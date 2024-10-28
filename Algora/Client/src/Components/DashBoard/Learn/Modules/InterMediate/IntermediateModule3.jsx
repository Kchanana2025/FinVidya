import { NavLink } from "react-router-dom";
import VideoEmbed from "../../VideoEmbed";

function IntermediateModule3() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Module 3: Credit and Debt Management</h2>
      <VideoEmbed videoId="YourVideoIDHere" />
      
      {/* Introduction */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Introduction</h3>
        <p>This module focuses on managing credit and debt effectively, crucial for intermediate investors aiming to improve their financial health. It covers improving credit scores, understanding loans and mortgages, and strategies for reducing debt.</p>
      </div>

      {/* Improving Credit Scores */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">1. Improving Credit Scores</h3>
        
        <div className="mb-4">
          <p><strong>1.1 Understanding Credit Scores</strong></p>
          <p><strong>Definition:</strong> A numerical representation of your creditworthiness, typically ranging from 300 to 850.</p>
          <p><strong>Components:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Payment History (35%):</strong> Timely payments on credit accounts.</li>
            <li><strong>Amounts Owed (30%):</strong> Credit utilization ratio.</li>
            <li><strong>Length of Credit History (15%):</strong> Time since accounts were opened.</li>
            <li><strong>Credit Mix (10%):</strong> Variety of credit types (loans, credit cards).</li>
            <li><strong>New Credit (10%):</strong> Recent credit inquiries and newly opened accounts.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>1.2 Strategies to Improve Credit Scores</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Timely Payments:</strong> Ensure all bills and credit accounts are paid on time.</li>
            <li><strong>Reduce Debt:</strong> Pay down outstanding balances, focusing on high-interest debt first.</li>
            <li><strong>Increase Credit Limit:</strong> Request higher limits to reduce credit utilization ratio.</li>
            <li><strong>Avoid New Credit:</strong> Limit the number of new credit inquiries.</li>
            <li><strong>Regular Monitoring:</strong> Check credit reports regularly for errors and dispute inaccuracies.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>1.3 Tools for Monitoring and Improving Credit</strong></p>
          <p><strong>Credit Monitoring Services:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Experian, Equifax, TransUnion:</strong> Major credit bureaus offering reports and monitoring services.</li>
            <li><strong>Credit Karma, Credit Sesame:</strong> Free services providing credit scores and insights.</li>
          </ul>
          <p><strong>Credit Improvement Apps:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Self:</strong> Helps build credit by creating a credit builder account.</li>
            <li><strong>Credit Strong:</strong> Combines credit building and savings.</li>
          </ul>
        </div>
      </div>

      {/* Understanding Loans and Mortgages */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">2. Understanding Loans and Mortgages</h3>
        
        <div className="mb-4">
          <p><strong>2.1 Types of Loans</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Personal Loans:</strong> Unsecured loans for various personal expenses.</li>
            <li><strong>Auto Loans:</strong> Secured loans for purchasing vehicles.</li>
            <li><strong>Student Loans:</strong> Loans for education expenses, can be federal or private.</li>
            <li><strong>Business Loans:</strong> Funding for business operations and growth.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>2.2 Mortgage Basics</strong></p>
          <p><strong>Definition:</strong> A loan used to purchase real estate, with the property serving as collateral.</p>
          <p><strong>Types:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Fixed-Rate Mortgages:</strong> Interest rate remains constant over the loan term.</li>
            <li><strong>Adjustable-Rate Mortgages (ARMs):</strong> Interest rate can change periodically based on an index.</li>
            <li><strong>Government-Backed Loans:</strong> FHA, VA, USDA loans with specific eligibility criteria.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>2.3 Key Mortgage Terms</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Principal:</strong> The original loan amount.</li>
            <li><strong>Interest Rate:</strong> The cost of borrowing, expressed as a percentage.</li>
            <li><strong>Term:</strong> The length of time to repay the loan (e.g., 15, 30 years).</li>
            <li><strong>Amortization:</strong> The process of paying off the loan through regular payments.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>2.4 Factors to Consider When Choosing a Loan or Mortgage</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Interest Rates:</strong> Compare fixed vs. variable rates.</li>
            <li><strong>Loan Terms:</strong> Shorter terms often mean higher monthly payments but lower total interest.</li>
            <li><strong>Fees and Closing Costs:</strong> Understand all associated costs.</li>
            <li><strong>Credit Score Impact:</strong> Higher credit scores typically secure better rates.</li>
          </ul>
        </div>
      </div>

      {/* Debt Reduction Strategies */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">3. Debt Reduction Strategies</h3>
        
        <div className="mb-4">
          <p><strong>3.1 Snowball Method</strong></p>
          <p><strong>Concept:</strong> Pay off debts from smallest to largest, regardless of interest rate.</p>
          <p><strong>Steps:</strong></p>
          <ol className="list-decimal ml-6">
            <li>List debts from smallest to largest balance.</li>
            <li>Make minimum payments on all debts except the smallest.</li>
            <li>Pay as much as possible on the smallest debt.</li>
            <li>Once the smallest debt is paid off, move to the next smallest.</li>
          </ol>
        </div>

        <div className="mb-4">
          <p><strong>3.2 Avalanche Method</strong></p>
          <p><strong>Concept:</strong> Pay off debts from highest to lowest interest rate.</p>
          <p><strong>Steps:</strong></p>
          <ol className="list-decimal ml-6">
            <li>List debts from highest to lowest interest rate.</li>
            <li>Make minimum payments on all debts except the highest interest rate.</li>
            <li>Pay as much as possible on the highest interest rate debt.</li>
            <li>Once the highest interest rate debt is paid off, move to the next highest.</li>
          </ol>
        </div>

        <div className="mb-4">
          <p><strong>3.3 Debt Consolidation</strong></p>
          <p><strong>Definition:</strong> Combining multiple debts into a single loan with a lower interest rate.</p>
          <p><strong>Types:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Balance Transfer Credit Cards:</strong> Transfer high-interest credit card debt to a card with a lower rate.</li>
            <li><strong>Personal Loans:</strong> Use a personal loan to pay off multiple debts.</li>
            <li><strong>Home Equity Loans:</strong> Use home equity to consolidate debt (risky if unable to repay).</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>3.4 Debt Management Plans (DMPs)</strong></p>
          <p><strong>Definition:</strong> A plan set up by a credit counseling agency to repay debts.</p>
          <p><strong>Benefits:</strong></p>
          <ul className="list-disc ml-6">
            <li>Lower interest rates and waived fees.</li>
            <li>Single monthly payment to the agency.</li>
            <li>Professional guidance and support.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p><strong>3.5 Bankruptcy</strong></p>
          <p><strong>Last Resort:</strong> Legal process to discharge or restructure debt.</p>
          <p><strong>Types:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Chapter 7:</strong> Liquidation bankruptcy to discharge most debts.</li>
            <li><strong>Chapter 13:</strong> Reorganization bankruptcy to repay debts over 3-5 years.</li>
          </ul>
          <p><strong>Consequences:</strong> Significant impact on credit score and ability to obtain future credit.</p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Conclusion</h3>
        <p>Effective credit and debt management is essential for maintaining financial stability and achieving long-term financial goals. By improving credit scores, understanding the intricacies of loans and mortgages, and employing strategic debt reduction methods, intermediate investors can enhance their financial health and make more informed financial decisions.</p>
      </div>

      {/* Additional Resources */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Additional Resources</h3>
        <p>Books:</p>
        <ul className="list-disc ml-6">
          <li><strong>"Your Score" by Anthony Davenport</strong></li>
          <li><strong>"The Total Money Makeover" by Dave Ramsey</strong></li>
        </ul>
        <p>Websites:</p>
        <ul className="list-disc ml-6">
          <li><a href="https://www.myfico.com" className="text-blue-500 hover:underline">MyFICO</a></li>
          <li><a href="https://www.bankrate.com" className="text-blue-500 hover:underline">Bankrate</a></li>
        </ul>
        <p>Videos:</p>
        <ul className="list-disc ml-6">
          <li><a href="https://www.youtube.com/channel/UClGZ9DlOEnlYDPJ1zRmi49g" className="text-blue-500 hover:underline">Graham Stephan</a></li>
          <li><a href="https://www.youtube.com/channel/UChG3mnoKcIR1SDAPexNlvLQ" className="text-blue-500 hover:underline">Andrei Jikh</a></li>
        </ul>
      </div>

      {/* Quiz and Exercises */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Quiz and Exercises</h3>
        <p>Test your understanding of credit scores, loans, mortgages, and debt reduction strategies:</p>
        <ul className="list-disc ml-6">
          <li><strong>Quiz:</strong> Answer questions related to the content covered in this module.</li>
          <li><strong>Exercises:</strong> Practical exercises to create a personalized debt reduction plan and evaluate different loan options.</li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between mt-6">
        <NavLink to="/dashboard/intermediate/2" className="text-blue-500 hover:underline">
          &larr; Previous Module
        </NavLink>
        <NavLink to="/dashboard/intermediate/4" className="text-blue-500 hover:underline">
          Next Module &rarr;
        </NavLink>
      </div>
    </div>
  );
}

export default IntermediateModule3;
