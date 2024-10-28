import { NavLink } from "react-router-dom";
import VideoEmbed from "../../VideoEmbed";

function IntermediateModule4() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Module 4: Retirement Planning for Intermediate Investors</h2>
      <VideoEmbed videoId="YourVideoIDHere" />

      {/* Introduction */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Introduction</h3>
        <p>This module focuses on retirement planning for intermediate investors. It covers different retirement accounts, retirement planning strategies, and calculating retirement needs, providing the essential knowledge and tools to create a solid retirement plan.</p>
      </div>

      {/* Different Retirement Accounts */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">1. Different Retirement Accounts</h3>
        
        <div className="mb-4">
          <h4 className="font-bold">1.1 401(k) Plans</h4>
          <p><strong>Overview:</strong> Employer-sponsored retirement plan allowing employees to save and invest for retirement on a tax-deferred basis.</p>
          <p><strong>Types of 401(k) Plans:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Traditional 401(k):</strong> Contributions are made pre-tax, reducing taxable income. Withdrawals in retirement are taxed as ordinary income.</li>
            <li><strong>Roth 401(k):</strong> Contributions are made after-tax. Withdrawals in retirement are tax-free.</li>
          </ul>
          <p><strong>Contribution Limits:</strong> The IRS sets annual contribution limits. For 2024, the limit is $19,500, with an additional $6,500 catch-up contribution for those aged 50 and older.</p>
          <p><strong>Employer Matching:</strong> Some employers match employee contributions up to a certain percentage, providing additional retirement savings.</p>
          <p><strong>Investment Options:</strong> Typically include a range of mutual funds, including stock, bond, and money market funds.</p>
          <p><strong>Withdrawal Rules:</strong> Penalties for withdrawals before age 59½, with some exceptions (e.g., hardship withdrawals).</p>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">1.2 Individual Retirement Accounts (IRAs)</h4>
          <p><strong>Overview:</strong> Personal retirement accounts offering tax advantages for retirement savings.</p>
          <p><strong>Types of IRAs:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Traditional IRA:</strong> Contributions may be tax-deductible, and earnings grow tax-deferred. Withdrawals in retirement are taxed as ordinary income.</li>
            <li><strong>Roth IRA:</strong> Contributions are made after-tax, and earnings grow tax-free. Qualified withdrawals in retirement are tax-free.</li>
          </ul>
          <p><strong>Contribution Limits:</strong> For 2024, the annual contribution limit is $6,500, with an additional $1,000 catch-up contribution for those aged 50 and older.</p>
          <p><strong>Investment Options:</strong> Wide range of options including stocks, bonds, mutual funds, ETFs, and more.</p>
          <p><strong>Withdrawal Rules:</strong></p>
          <ul className="list-disc ml-6">
            <li><strong>Traditional IRA:</strong> Penalties for withdrawals before age 59½, required minimum distributions (RMDs) starting at age 72.</li>
            <li><strong>Roth IRA:</strong> Contributions can be withdrawn at any time without penalty, but earnings withdrawals before age 59½ and without meeting the five-year rule may incur penalties.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">1.3 Other Retirement Accounts</h4>
          <ul className="list-disc ml-6">
            <li><strong>SEP IRA:</strong> Simplified Employee Pension plan for self-employed individuals and small business owners. Higher contribution limits compared to traditional IRAs.</li>
            <li><strong>SIMPLE IRA:</strong> Savings Incentive Match Plan for Employees, suitable for small businesses with fewer than 100 employees. Allows both employee and employer contributions.</li>
            <li><strong>403(b) Plans:</strong> Similar to 401(k) plans, but available for employees of public schools, certain non-profits, and ministers.</li>
            <li><strong>457 Plans:</strong> Deferred compensation plans for state and local government employees and certain non-profit employees.</li>
          </ul>
        </div>
      </div>

      {/* Retirement Planning Strategies */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">2. Retirement Planning Strategies</h3>
        
        <div className="mb-4">
          <h4 className="font-bold">2.1 Setting Retirement Goals</h4>
          <ul className="list-disc ml-6">
            <li><strong>Lifestyle Considerations:</strong> Define the desired retirement lifestyle, including travel, hobbies, housing, and healthcare.</li>
            <li><strong>Time Horizon:</strong> Determine the number of years until retirement to establish savings goals and investment strategies.</li>
            <li><strong>Risk Tolerance:</strong> Assess risk tolerance to create an appropriate investment mix.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">2.2 Savings Strategies</h4>
          <ul className="list-disc ml-6">
            <li><strong>Automated Contributions:</strong> Set up automatic contributions to retirement accounts to ensure consistent savings.</li>
            <li><strong>Employer Contributions:</strong> Maximize employer matching contributions to take full advantage of free money.</li>
            <li><strong>Catch-Up Contributions:</strong> Utilize catch-up contributions if over age 50 to boost retirement savings.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">2.3 Investment Strategies</h4>
          <ul className="list-disc ml-6">
            <li><strong>Asset Allocation:</strong> Diversify investments across asset classes (stocks, bonds, cash) to balance risk and return.</li>
            <li><strong>Rebalancing:</strong> Regularly review and adjust the investment portfolio to maintain the desired asset allocation.</li>
            <li><strong>Risk Management:</strong> Adjust the level of risk as retirement approaches, shifting towards more conservative investments.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">2.4 Tax Planning</h4>
          <ul className="list-disc ml-6">
            <li><strong>Tax-Deferred Accounts:</strong> Utilize traditional 401(k) and IRA accounts to defer taxes on contributions and earnings.</li>
            <li><strong>Tax-Free Accounts:</strong> Utilize Roth 401(k) and IRA accounts for tax-free withdrawals in retirement.</li>
            <li><strong>Required Minimum Distributions (RMDs):</strong> Plan for RMDs to minimize tax impact and avoid penalties.</li>
          </ul>
        </div>
      </div>

      {/* Calculating Retirement Needs */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">3. Calculating Retirement Needs</h3>
        
        <div className="mb-4">
          <h4 className="font-bold">3.1 Estimating Retirement Expenses</h4>
          <ul className="list-disc ml-6">
            <li><strong>Basic Living Expenses:</strong> Estimate costs for housing, utilities, food, transportation, and other necessities.</li>
            <li><strong>Healthcare Costs:</strong> Account for medical expenses, including insurance premiums, out-of-pocket costs, and long-term care.</li>
            <li><strong>Lifestyle Expenses:</strong> Include discretionary spending for travel, entertainment, hobbies, and gifts.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">3.2 Estimating Retirement Income</h4>
          <ul className="list-disc ml-6">
            <li><strong>Social Security Benefits:</strong> Estimate benefits based on earnings history and planned retirement age. Use the Social Security Administration's online tools for accurate estimates.</li>
            <li><strong>Pension Income:</strong> Include any expected pension payments from former employers.</li>
            <li><strong>Retirement Account Withdrawals:</strong> Plan for systematic withdrawals from retirement accounts to supplement other income sources.</li>
            <li><strong>Other Income:</strong> Consider rental income, part-time work, and other sources of income in retirement.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">3.3 Calculating Savings Goals</h4>
          <ul className="list-disc ml-6">
            <li><strong>Replacement Ratio:</strong> Aim to replace a certain percentage of pre-retirement income (typically 70-80%) to maintain the desired lifestyle.</li>
            <li><strong>Retirement Savings Calculator:</strong> Use online calculators to estimate how much to save annually to meet retirement goals based on current savings, expected returns, and time horizon.</li>
            <li><strong>Monte Carlo Simulations:</strong> Use simulations to assess the probability of meeting retirement goals under various market conditions.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-bold">3.4 Adjusting Plans as Needed</h4>
          <ul className="list-disc ml-6">
            <li><strong>Regular Reviews:</strong> Periodically review and adjust the retirement plan to stay on track.</li>
            <li><strong>Adjust Savings Rate:</strong> Increase savings if behind on goals or decrease if ahead.</li>
            <li><strong>Adjust Investment Strategy:</strong> Modify the investment strategy as needed based on changes in risk tolerance, time horizon, and market conditions.</li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Conclusion</h3>
        <p>Effective retirement planning involves understanding different retirement accounts, implementing strategic saving and investing practices, and accurately calculating retirement needs. By mastering these aspects, intermediate investors can build a solid foundation for a secure and fulfilling retirement.</p>
      </div>

      {/* Additional Resources */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Additional Resources</h3>
        <p>Books:</p>
        <ul className="list-disc ml-6">
          <li><strong>"The Bogleheads' Guide to Retirement Planning" by Taylor Larimore, Mel Lindauer, Richard A. Ferri, and Laura F. Dogu</strong></li>
          <li><strong>"Retirement Planning for Dummies" by Matthew Krantz</strong></li>
          <li><strong>"How Much Money Do I Need to Retire?" by Todd Tresidder</strong></li>
        </ul>
        <p>Websites:</p>
        <ul className="list-disc ml-6">
          <li><a href="https://www.investopedia.com" className="text-blue-500 hover:underline">Investopedia</a> for comprehensive retirement planning education</li>
          <li><a href="https://www.ssa.gov" className="text-blue-500 hover:underline">The Social Security Administration</a> for estimating benefits</li>
        </ul>
        <p>Videos:</p>
        <ul className="list-disc ml-6">
          <li><a href="https://www.youtube.com/channel/UCnMn36GT_H0X-w5_ckLtlgQ" className="text-blue-500 hover:underline">Financial Education</a></li>
          <li><a href="https://www.youtube.com/channel/UCuB8tcpQSM2Xp7kZom25tWA" className="text-blue-500 hover:underline">Ben Felix</a></li>
        </ul>
      </div>

      {/* Quiz and Exercises */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Quiz and Exercises</h3>
        <p>Test your understanding of different retirement accounts, retirement planning strategies, and calculating retirement needs:</p>
        <ul className="list-disc ml-6">
          <li><strong>Quiz:</strong> Answer questions related to the content covered in this module.</li>
          <li><strong>Exercises:</strong> Practical exercises to set retirement goals, develop a savings plan, and estimate retirement expenses and income.</li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between mt-6">
        <NavLink to="/dashboard/intermediate/3" className="text-blue-500 hover:underline">
          &larr; Previous Module
        </NavLink>
       
      </div>
    </div>
  );
}

export default IntermediateModule4;
