import React from "react";
import bgimg from "../../assets/bgs/Welcome Page.png";
import Frame from "../../components/Frame";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";

const Welcome = () => {
  const handleClick = () => {};
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-65px)]">
      <img
        src={bgimg}
        alt=""
        className="z-0 fixed w-full h-full bg-center bg-cover top-0 left-0 object-cover"
      />
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }} // Start position
        animate={{ opacity: 1, y: 0 }} // End position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      >
        <Frame
          extraEdit={`flex flex-col duration-2000 ease-out transition-all py-[60px] gap-[40px] px-[15px] items-center justify-center`}
        >
          <WorningTitle icon={true} title={"WELCOME TO PROJECT 0"} />
          <p className="text-white font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]">
            the system is activated discover the <br /> challenges waiting for
            you in the gates <br /> you will play agaisnt time and hard <br />
            challenges but before that you have to <br /> choose your character
            in the team
          </p>
          <div
            onClick={handleClick}
            className="border-[1px] border-white text-white font-sulphur text-center p-[15px] flex items-center justify-center cursor-pointer text-2xl tracking-[0.4rem]"
          >
            Next
          </div>
        </Frame>
      </motion.div>
    </div>
  );
};

export default Welcome;
