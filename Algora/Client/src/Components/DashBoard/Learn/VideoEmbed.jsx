import React from 'react';

/**
 * Renders a YouTube video embedded in a container with specified dimensions.
 *
 * @param {Object} props - The component props.
 * @param {string} props.videoId - The ID of the YouTube video to embed.
 * @return {JSX.Element} The embedded YouTube video.
 */
const VideoEmbed = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container ml-14" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{ position: 'absolute', top: 0, left: 0, width: '75%', height: '75%' }}
      />
    </div>
  );
};

export default VideoEmbed;
