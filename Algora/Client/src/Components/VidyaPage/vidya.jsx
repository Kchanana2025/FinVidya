import { useState, useEffect } from 'react';
import axios from 'axios';
import './vidya.css'; // Import CSS for styling

const FinVidyaInformation = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('http://localhost:5003/news');
        const data = response.data.articles;
        setCompanies(data);
      } catch (error) {
        setError('Failed to fetch companies');
      }
      setLoading(false);
    };

    fetchCompanies();
  }, []);

  return (
    <div className="finvidya-container">
      <h1>FinVidya Information</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {companies.length > 0 && (
        <div className="finvidya-content">
          <div className="finvidya-column">
            <h2>Company Name</h2>
            {companies.map((item, index) => (
              <div key={index}>
                {item.companies.map((company, i) => (
                  <p key={i}>{company}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="finvidya-column">
            <h2>Sentiment Score</h2>
            {companies.map((item, index) => (
              <p key={index} className="sentiment-wrapper">
              <div
                className={`sentiment-rectangle ${
                  item.sentiment === 'positive'
                    ? 'green'
                    : item.sentiment === 'negative'
                    ? 'red'
                    : 'neutral'
                }`}
              ></div>
              {item.score.toFixed(3)}
            </p>
            
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinVidyaInformation;
