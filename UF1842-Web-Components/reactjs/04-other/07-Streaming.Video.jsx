import React, { useState } from 'react';

const Video = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  return (
    <div>
      <h2>Video Streaming or Download</h2>

      <div>
        <button onClick={() => setIsDownloaded(false)}>Stream Video</button>
        <button onClick={() => setIsDownloaded(true)}>Download Video</button>
      </div>

      {isDownloaded ? (
        <div>
          <h3>Download Video</h3>
          <a href="https://your-server.com/path/to/video.mp4" download="video.mp4">
            <button>Download Video</button>
          </a>
        </div>
      ) : (
        <div>
          <h3>Stream Video</h3>
          <video width="600" controls>
            <source src="https://your-server.com/path/to/stream/video.m3u8" type="application/x-mpegURL" />
            <source src="https://your-server.com/path/to/stream/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default Video;
