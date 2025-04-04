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
                desc="The system is activated. Discover the challenges waiting for you in the gates. You will play against time and hard challenges. But before that, you have to choose your character in the team."
                gateNumber={1}
              />
              <GateCard
                open={false}
                title={"igris: the red knight"}
                gateNumber={2}
                date="2025-04-15T14:00:00.000Z"
              />
            </div>
            <div className="flex w-[80%] gap-[30px]">
              <GateCard
                open={false}
                title={"igris: the red knight"}
                gateNumber={3}
                date="2025-04-15T16:00:00.000Z"
              />
              <GateCard
                open={false}
                title={"igris: the red knight"}
                gateNumber={4}
                date="2025-04-15T18:00:00.000Z"
              />
            </div>
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default Gates;
