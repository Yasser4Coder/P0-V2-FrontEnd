import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa6";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isYouTube, setIsYouTube] = useState(false);
  const [embedUrl, setEmbedUrl] = useState("");

  // Detect if the source is a YouTube link
  useEffect(() => {
    const youtubeRegex =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = src.match(youtubeRegex);
    if (match) {
      setIsYouTube(true);
      setEmbedUrl(
        `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&controls=1`
      );
    } else {
      setIsYouTube(false);
    }
  }, [src]);

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
    <div className="relative w-full max-w-[800px] mx-auto bg-[#0D0A1E] aspect-video">
      {isYouTube ? (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlayPause}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              onClick={togglePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 p-3 rounded-full"
            >
              <FaPlay size={66} color="white" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
