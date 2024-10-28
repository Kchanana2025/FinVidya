import React from 'react';

const IncomeInvestor = () => {
  // Sample data for portfolio allocation (adjusted for Income Investor profile)
  const portfolioAllocations = [
    { name: 'Dividend Stocks', percentage: 50 },
    { name: 'Real Estate Investment Trusts (REITs)', percentage: 30 },
    { name: 'Bonds', percentage: 15 },
    { name: 'Cash Equivalents', percentage: 5 },
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold mb-4">Income Investor Dashboard</h1>
      <p className="text-lg mb-4">
        Welcome, Income Investor! Here are tailored recommendations for your investment portfolio:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Portfolio Allocation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Portfolio Allocation</h2>
          <div className="space-y-2">
            {portfolioAllocations.map((allocation, index) => (
              <div key={index} className="flex justify-between">
                <span className="font-semibold">{allocation.name}</span>
                <span>{allocation.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Characteristics */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Characteristics of Income Investors</h2>
          <ul className="list-disc ml-5">
            <li>Focus on generating regular income from investments.</li>
            <li>Preference for dividend-paying stocks and REITs.</li>
            <li>Investment in bonds for steady interest income.</li>
            <li>Active management of income streams and reinvestment strategies.</li>
          </ul>
        </div>
        
        {/* Sector Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Sector Recommendations</h2>
          <ul className="list-disc ml-5">
            <li>Dividend Stocks: Invest in companies with a consistent dividend payout history.</li>
            <li>REITs: Consider real estate investment trusts for passive rental income.</li>
            <li>Bonds: Allocate a portion to bonds for fixed interest payments.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IncomeInvestor;
