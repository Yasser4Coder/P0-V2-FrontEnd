// import footerimg from "../../../assets/images/Image.png";
import bgimg from "../../../assets/bgs/splash screen.png";
import charcter from "../../../assets/images/solo_leveling_statue_of_god_by_gisamadesing_dfagw82-414w-2x 1.png";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BackGround = ({ character, todark }) => {
  const [side, setSide] = useState("left-[50%]");
  useEffect(() => {
    if (character === "center") {
      setSide("left-[50%]");
    }
    if (character === "left") {
      setSide("left-[5%]");
    }
    if (character === "right") {
      setSide("left-[95%]");
    }
  }, [character]);
  return (
    <div className="relative">
      {todark && (
        <motion.div
          className="fixed z-10 w-full h-full top-0 left-0 bg-[#05111d]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }} // Smooth fade-in
        />
      )}

      <img
        src={bgimg}
        alt=""
        className="z-0 fixed w-full h-full bg-center bg-cover top-0 left-0 object-cover"
      />
      <img
        src={charcter}
        alt=""
        className={`fixed duration-800 ease-out transition-all top-[70%] sm:top-[60%] ${side} translate-x-[-50%] translate-y-[-50%]`}
      />
      {/* <img
        src={footerimg}
        alt=""
        className="fixed z-0 left-0 bottom-0 w-full h-[11%]"
      /> */}
    </div>
  );
};

export default BackGround;
