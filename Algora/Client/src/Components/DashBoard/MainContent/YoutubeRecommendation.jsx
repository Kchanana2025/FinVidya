import React, { useState } from 'react';
import axios from 'axios';
import YTVideoEmbed from './YTVideoEmbed'; // Adjust the path if necessary
import YTLoader from './YTLoader';

const YoutubeRecommendationSystem= () => {
  const [keywords, setKeywords] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchVideos = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5002/dailymotion', { keywords });
      setVideos(response.data.videos);
    } catch (error) {
      setError('Failed to fetch videos');
    }
    setLoading(false);
  };

  return (
    <>
    <h1 style={{'marginTop':'20px','marginLeft':'40px','fontSize':'1.2rem'}}> Video Finder</h1>
<div style={{'marginTop':'60px','marginLeft':'-170px'}}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search"
      />
      <button onClick={fetchVideos}>Find</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {videos.length > 0 && (
        <ul>
          {videos.map((video, index) => (
            <li key={index}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <h3>{video.title}</h3>
                <img src={video.thumbnail} alt={video.title} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
    
  );
};

export default YoutubeRecommendationSystem;
