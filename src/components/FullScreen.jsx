import { useState } from "react";
import { BsFullscreen } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";

const FullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };
  return (
    <div
      className="fixed top-[2.6%] right-[1.5%] z-50 cursor-pointer group"
      onClick={toggleFullscreen}
    >
      {isFullscreen ? (
        <BsFullscreenExit className="text-white text-2xl transition-transform duration-200 group-hover:scale-110" />
      ) : (
        <BsFullscreen className="text-white text-2xl transition-transform duration-200 group-hover:scale-110" />
      )}
      <div className="absolute right-0 mt-1 bg-amber-50 text-black text-sm p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {isFullscreen
          ? "Exit full screen"
          : "Full screen for better experience"}
      </div>
    </div>
  );
};

export default FullScreen;
