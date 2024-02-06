// VideoPlayer.js
import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ video, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component mounts
    videoRef.current.play();

    // Add a cleanup function to stop the video when the component unmounts or a new video is selected
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset the video to the beginning
      }
    };
  }, [video]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <video
          ref={videoRef}
          controls
          width="600"
          height="400"
          poster={video.url} // Use the video URL as the poster
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
