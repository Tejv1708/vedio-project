// VideoList.js
import React from "react";

const VideoList = ({
  videos,
  onVideoClick,
  onBookmarkToggle,
  bookmarkedVideos,
}) => {
  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>
          <div>
            <video width="120" height="90" poster={video.url} controls muted>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.title}</p>
          </div>
          <div>
            <button onClick={() => onVideoClick(video)}>Play</button>
            <button onClick={() => onBookmarkToggle(video)}>
              {bookmarkedVideos &&
              bookmarkedVideos.some((v) => v.id === video.id)
                ? "Remove Bookmark"
                : "Bookmark"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
