import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
import bg from "../../assets/gif/scoreboard.webp";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";
import Peragraph from "../../components/Peragraph";
import useAuth from "../../hooks/useAuth";
import SbTeams from "./components/SbTeams";
const Home = () => {
  const [showFrame, setShowFrame] = useState(false);
  const { auth } = useAuth();

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
          <Frame
            extraEdit={`flex flex-col duration-2000 ease-out transition-all py-[80px] gap-[50px] px-[15px] items-center justify-center`}
          >
            <WorningTitle title={"Scoreboard"} />
            <Peragraph>
              Your Team {auth?.team?.teamName} is in The 06th Place with 166.98
              Points
            </Peragraph>
            <SbTeams />
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
