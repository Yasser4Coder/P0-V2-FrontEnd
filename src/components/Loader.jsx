import { useState, useEffect } from "react";

const assets = [
  { type: "audio", src: "/assets/audios/notification.mp3" },
  { type: "image", src: "/assets/gif/AntKing.gif" },
  { type: "image", src: "/assets/gif/Baran.gif" },
  { type: "image", src: "/assets/gif/igrit.gif" },
  { type: "image", src: "/assets/gif/kargalganGif.gif" },
  { type: "image", src: "/assets/gif/scoreboard1.gif" },
];

const Loader = ({ onFinish }) => {
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    let loaded = 0;

    assets.forEach(({ type, src }) => {
      if (type === "image") {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = onAssetLoad;
      } else if (type === "audio") {
        const audio = new Audio();
        audio.src = src;
        audio.oncanplaythrough = audio.onerror = onAssetLoad;
      }
    });

    function onAssetLoad() {
      loaded++;
      setLoadedCount((prev) => prev + 1);
      if (loaded === assets.length) {
        setTimeout(() => onFinish(), 500);
      }
    }
  }, []);

  const percent = Math.floor((loadedCount / assets.length) * 100);

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center z-50">
      <div className="w-3/4 h-3 bg-gray-700 rounded">
        <div
          className="bg-green-500 h-full rounded transition-all duration-200"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-4 text-xl font-mono">Loading... {percent}%</p>
    </div>
  );
};

export default Loader;
