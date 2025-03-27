import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ChallengeCard = ({
  divNum,
  challengeName,
  categorie,
  points,
  difficulty,
  solved,
  index,
  to,
}) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [delayedSolved, setDelayedSolved] = useState(false); // New state for delayed application

  const navigate = useNavigate();
  useEffect(() => {
    if (solved) {
      const timer = setTimeout(() => {
        setShow(true);
        setDelayedSolved(true); // Apply solved styles after delay
      }, 2000);

      const timer2 = setTimeout(() => {
        setShow2(true);
      }, 4500);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [solved]);

  return (
    <div
      className={`div${divNum} ${
        delayedSolved &&
        solved === true &&
        (index === 1 || index === 3 || index === 5) &&
        show === true
          ? "blur-backgroundGateCard-green border-[#26CD87] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]"
          : delayedSolved &&
            solved === true &&
            (index === 2 || index === 4) &&
            show2 === true
          ? "blur-backgroundGateCard-green border-[#26CD87] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]"
          : "blur-backgroundGateCard border-white"
      } font-sulphur relative rounded-2xl flex flex-col items-center justify-between py-[13px] px-[15px] border-3`}
    >
      {index === 1 && (
        <div className="absolute w-[5px] h-[124%] bg-white z-20 bottom-[-125%] overflow-hidden">
          <motion.div
            initial={{ height: "0%" }}
            animate={solved ? { height: "100%" } : { height: "0%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-0 bottom-0 w-full bg-[#26CD87]"
          ></motion.div>
        </div>
      )}

      {index === 2 && (
        <div className="absolute w-[174%] h-[83%] z-20 right-[44%] bottom-[-83%]">
          {/* Left Vertical Bar (Fills First) */}
          <div className="relative h-[68%] w-[5px] top-[33%] bg-white overflow-hidden">
            <motion.div
              initial={{ height: "0%" }}
              animate={solved ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
              className="absolute left-0 bottom-0 w-full bg-[#26CD87]"
            ></motion.div>
          </div>

          {/* Horizontal Bar (Fills Second) */}
          <div className="relative h-[5px] w-full bottom-[37%] bg-white float-right overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={solved ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="absolute left-0 top-0 h-full bg-[#26CD87]"
            ></motion.div>
          </div>

          {/* Right Vertical Bar (Fills Last) */}
          <div className="relative h-[30%] w-[5px] bottom-[70%] bg-white float-right overflow-hidden">
            <motion.div
              initial={{ height: "0%" }}
              animate={solved ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 3 }}
              className="absolute left-0 bottom-0 w-full bg-[#26CD87]"
            ></motion.div>
          </div>
        </div>
      )}

      {index === 3 && (
        <div className="absolute h-[5px] w-[62%] bg-white z-20 bottom-[30%] left-[-62%] overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={solved ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-0 top-0 h-full bg-[#26CD87]"
          ></motion.div>
        </div>
      )}
      {index === 4 && (
        <div className="absolute w-[174%] h-[83%] z-20 left-[44%] bottom-[-83%]">
          {/* Left Vertical Bar (Fills First) */}
          <div className="relative h-[68%] w-[5px] top-[33%] float-right bg-white overflow-hidden">
            <motion.div
              initial={{ height: "0%" }}
              animate={solved ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
              className="absolute left-0 bottom-0 w-full bg-[#26CD87]"
            ></motion.div>
          </div>

          {/* Horizontal Bar (Fills Second) */}
          <div className="relative h-[5px] w-full bottom-[37%] bg-white float-left overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={solved ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="absolute right-0 top-0 h-full bg-[#26CD87]"
            ></motion.div>
          </div>

          {/* Right Vertical Bar (Fills Last) */}
          <div className="relative h-[30%] w-[5px] bottom-[70%] bg-white float-left overflow-hidden">
            <motion.div
              initial={{ height: "0%" }}
              animate={solved ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 3 }}
              className="absolute left-0 bottom-0 w-full bg-[#26CD87]"
            ></motion.div>
          </div>
        </div>
      )}
      {index === 5 && (
        <div className="absolute h-[5px] w-[62%] bg-white z-20 bottom-[31%] right-[-62%] overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={solved ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute right-0 top-0 h-full bg-[#26CD87]"
          ></motion.div>
        </div>
      )}

      <h1 className="border-[1px] border-white py-[5px] text-lg text-white px-[10px]">
        {challengeName}
      </h1>
      <div className="w-full tracking-[0.1rem] text-white">
        <p>categorie: {categorie}</p>
        <p>points : {points}</p>
        <p>difficulty : {difficulty}</p>
      </div>
      {solved === true &&
      show === true &&
      (index === 1 || index === 3 || index === 5) ? (
        <div className="border-[1px] cursor-cell text-white border-white py-[5px] px-[10px]">
          Solved
        </div>
      ) : solved === true && show2 === true && (index === 2 || index === 4) ? (
        <div className="border-[1px] cursor-cell text-white border-white py-[5px] px-[10px]">
          Solved
        </div>
      ) : (
        <button
          onClick={() => (solved === true ? "" : navigate(to))}
          className="border-[1px] cursor-pointer text-white border-white py-[5px] px-[10px]"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default ChallengeCard;
