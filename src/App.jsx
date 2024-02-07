// App.js
import { useState, useEffect } from "react";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const initialVideos = [];

    setVideos(initialVideos);
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleBookmarkToggle = (video) => {
    if (bookmarkedVideos.some((v) => v.id === video.id)) {
      setBookmarkedVideos(bookmarkedVideos.filter((v) => v.id !== video.id));
    } else {
      setBookmarkedVideos([...bookmarkedVideos, video]);
    }
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;

    // Assuming each file is a video, you may need to validate file types
    const newVideos = Array.from(uploadedFiles).map((file, index) => ({
      id: videos.length + index + 1,
      title: file.name,
      url: URL.createObjectURL(file),
    }));

    setVideos([...videos, ...newVideos]);
  };

  const handleCloseVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <h1>Video Library</h1>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileUpload}
        multiple
      />
      <VideoList
        videos={videos}
        onVideoClick={handleVideoClick}
        onBookmarkToggle={handleBookmarkToggle}
      />
      {selectedVideo && (
        <VideoPlayer video={selectedVideo} onClose={handleCloseVideoPlayer} />
      )}
      <h2>Bookmarked Videos</h2>
      <VideoList
        videos={bookmarkedVideos}
        onVideoClick={handleVideoClick}
        onBookmarkToggle={handleBookmarkToggle}
      />
    </div>
  );
};

export default App;
