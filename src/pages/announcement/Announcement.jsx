import AnnouncementComp from "./component/AnnouncementComp";
import bg from "../../assets/gif/scoreboard.webp";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function Announcement() {
  const [showFrame, setShowFrame] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFrame(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[60px]">
      <img
        src={bg}
        alt=""
        className="z-0 fixed w-full h-full bg-center top-0 left-0 bg-contain"
      />
      {showFrame && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }} // Start position
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
          {/* we will use the map function here after fetcing the data */}
          <AnnouncementComp />
        </motion.div>
      )}
    </div>
  );
}

export default Announcement;
