import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react"; // Play/Pause Icons
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";

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
    <div className="relative w-full bg-[#0D0A1E]">
      {/* Video Element (Clicking on it toggles play/pause) */}
      <video
        ref={videoRef}
        className="w-full h-auto cursor-pointer"
        onClick={togglePlayPause}
        onEnded={() => setIsPlaying(false)} // Reset on video end
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 p-3 rounded-full"
      >
        {isPlaying ? (
          <FaPause size={66} color="white" />
        ) : (
          <FaPlay size={66} color="white" />
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
