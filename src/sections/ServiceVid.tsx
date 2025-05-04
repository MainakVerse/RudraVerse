// components/VideoPlayer.tsx
import React from "react";

const VideoPlayer = () => {
  const videoId = "1Eu7iOF7gc1AG1eWBpTo3tPIfmaSKhYcH"; // Replace with your Google Drive file ID
  const videoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <video
        controls
        className="max-w-full max-h-full"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
