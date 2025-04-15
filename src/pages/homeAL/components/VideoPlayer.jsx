import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative w-full max-w-[800px] mx-auto bg-[#0D0A1E]">
      <video
        ref={videoRef}
        className="w-full h-[300px] object-cover cursor-pointer"
        onClick={togglePlayPause}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Show play button ONLY if video is NOT playing */}
      {!isPlaying && (
        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 p-3 rounded-full"
        >
          <FaPlay size={66} color="white" />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
