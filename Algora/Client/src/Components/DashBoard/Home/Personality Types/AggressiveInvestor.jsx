import React from 'react';

const AggressiveInvestor = () => {
  // Sample data for portfolio allocation (adjusted for Aggressive Investor profile)
  const portfolioAllocations = [
    { name: 'Stocks', percentage: 70 },
    { name: 'Mutual Funds', percentage: 15 },
    { name: 'Bonds', percentage: 10 },
    { name: 'Gold', percentage: 5 },
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold mb-4">Aggressive Investor Dashboard</h1>
      <p className="text-lg mb-4">
        Welcome, Aggressive Investor! Here are tailored recommendations for your investment portfolio:
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
          <h2 className="text-xl font-bold mb-2">Characteristics of Aggressive Investors</h2>
          <ul className="list-disc ml-5">
            <li>Investment in high-risk, high-reward stocks.</li>
            <li>Focus on startups, technology, and emerging sectors.</li>
            <li>Willingness to endure significant market volatility.</li>
            <li>Active portfolio management and regular reallocation.</li>
          </ul>
        </div>
        
        {/* Sector Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Sector Recommendations</h2>
          <ul className="list-disc ml-5">
            <li>Technology: Invest in innovative tech companies</li>
            <li>Startups: Focus on early-stage companies with high growth potential</li>
            <li>Emerging Markets: Seek growth opportunities in developing economies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AggressiveInvestor;
