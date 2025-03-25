import React, { useEffect, useState } from "react";
import bgimg from "../../assets/gif/welcom.webp";
import bgimgFix from "../../assets/bgs/Welcome Page.png";
import Frame from "../../components/Frame";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";
import Button from "../../components/Button";
import Peragraph from "../../components/Peragraph";

const Welcome = () => {
  const [fixBg, setFixBg] = useState(bgimg);
  useEffect(() => {
    setTimeout(() => {
      setFixBg(bgimgFix);
    }, 4000);
  });
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[60px]">
      <img
        src={fixBg}
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
          <Peragraph>
            the system is activated discover the <br /> challenges waiting for
            you in the gates <br /> you will play agaisnt time and hard <br />
            challenges but before that you have to <br /> choose your character
            in the team
          </Peragraph>
          <Button>Next</Button>
        </Frame>
      </motion.div>
    </div>
  );
};

export default Welcome;
