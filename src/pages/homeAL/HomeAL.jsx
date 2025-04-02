import React, { useEffect, useState } from "react";
import bgimg from "../../assets/gif/welcom.webp";
import bgimgFix from "../../assets/bgs/Welcome Page.png";
import Frame from "../../components/Frame";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";
import Peragraph from "../../components/Peragraph";

const HomeAL = () => {
  const [fixBg, setFixBg] = useState(bgimg);

  useEffect(() => {
    setTimeout(() => {
      setFixBg(bgimgFix);
    }, 4000);
  });
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[30px]">
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
          extraEdit={`flex flex-col duration-2000 ease-out transition-all py-[30px] gap-[30px] px-[15px] items-center justify-center`}
        >
          <WorningTitle icon={true} title={"WELCOME TO PROJECT 0"} />
          <Peragraph>you are in the system right now</Peragraph>
        </Frame>
      </motion.div>
    </div>
  );
};

export default HomeAL;
