import React from 'react';

const GrowthInvestor = () => {
  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold mb-4">Growth Investor Dashboard</h1>
      <p className="text-lg mb-4">
        Welcome, Growth Investor! Here are tailored recommendations for your investment portfolio:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Portfolio Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Portfolio Allocation</h2>
          <ul className="list-disc ml-5">
            <li><strong>Stocks:</strong> 60%</li>
            <li><strong>Mutual Funds:</strong> 25%</li>
            <li><strong>Bonds:</strong> 10%</li>
            <li><strong>Gold:</strong> 5%</li>
          </ul>
        </div>
        
        {/* Characteristics */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Characteristics of Growth Investors</h2>
          <ul className="list-disc ml-5">
            <li>High risk tolerance</li>
            <li>Focus on capital appreciation</li>
            <li>Long-term investment horizon</li>
            <li>Preference for growth-oriented sectors</li>
          </ul>
        </div>
        
        {/* Sector Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Sector Recommendations</h2>
          <ul className="list-disc ml-5">
            <li>Technology: Invest in innovative tech companies</li>
            <li>Healthcare: Focus on biotech and pharmaceuticals</li>
            <li>Emerging Markets: Seek growth opportunities in developing economies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GrowthInvestor;
