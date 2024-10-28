import React from 'react';

const DefensiveInvestor = () => {
  // Sample data for portfolio allocation (adjusted for Defensive Investor profile)
  const portfolioAllocations = [
    { name: 'Stocks', percentage: 40 },
    { name: 'Mutual Funds', percentage: 30 },
    { name: 'Bonds', percentage: 25 },
    { name: 'Gold', percentage: 5 },
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold mb-4">Defensive Investor Dashboard</h1>
      <p className="text-lg mb-4">
        Welcome, Defensive Investor! Here are tailored recommendations for your investment portfolio:
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
          <h2 className="text-xl font-bold mb-2">Characteristics of Defensive Investors</h2>
          <ul className="list-disc ml-5">
            <li>Diversified portfolio with a mix of bonds and stocks.</li>
            <li>Emphasis on blue-chip companies with a history of stability.</li>
            <li>Preference for index funds and ETFs for broad market exposure.</li>
            <li>Regular portfolio reviews and rebalancing.</li>
          </ul>
        </div>
        
        {/* Sector Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Sector Recommendations</h2>
          <ul className="list-disc ml-5">
            <li>Blue-Chip Stocks: Invest in well-established, financially stable companies.</li>
            <li>Bonds: Allocate a significant portion to bonds for stability and income.</li>
            <li>Index Funds: Consider low-cost index funds for diversified exposure.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DefensiveInvestor;
