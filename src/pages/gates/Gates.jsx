import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
import bg from "../../assets/gif/scoreboard.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";
import GateCard from "./components/GateCard";

const Gates = () => {
  const [showFrame, setShowFrame] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFrame(true);
    }, 1500); // Show after 1 second

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
          <Frame
            extraEdit={`flex flex-col duration-2000 ease-out transition-all py-[80px] gap-[50px] px-[15px] items-center justify-center`}
          >
            <WorningTitle title={"Enter a Gate"} />
            <div className="flex w-[80%] gap-[30px]">
              <GateCard
                open={true}
                title={"igris: the red knight"}
                desc="the system is activated discover the challenges waiting for you in the gates you will play agaisnt time and hard challenges but before that you have to choose your character in the team"
              />
              <GateCard
                open={true}
                title={"igris: the red knight"}
                desc="the system is activated discover the challenges waiting for you in the gates you will play agaisnt time and hard challenges but before that you have to choose your character in the team"
              />
            </div>
            <div className="flex w-[80%] gap-[30px]">
              <GateCard title={"igris: the red knight"} />
              <GateCard title={"igris: the red knight"} />
            </div>
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default Gates;
