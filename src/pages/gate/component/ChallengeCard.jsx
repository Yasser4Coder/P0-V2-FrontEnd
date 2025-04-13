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
  const [delayedSolved, setDelayedSolved] = useState(false); // New state for delayed application

  const navigate = useNavigate();
  useEffect(() => {
    if (solved) {
      const timer = setTimeout(() => {
        setShow(true);
        setDelayedSolved(true); // Apply solved styles after delay
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [solved]);

  return (
    <div
      className={`div${divNum} ${
        delayedSolved && solved === true && show === true
          ? "blur-backgroundGateCard-green border-[#26CD87] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]"
          : "blur-backgroundGateCard border-white"
      } font-sulphur min-h-[200px] max-h-[250px] relative rounded-2xl flex flex-col items-center justify-between py-[13px] px-[15px] border-3`}
    >
      {/* bg-[#26CD87] */}
      {index === 1 && (
        <div className="absolute w-[98%] h-[34%] z-20 bottom-[50%] right-[-98.5%] overflow-hidden flex flex-col">
          {/* Right vertical green bar */}
          <div className="relative h-full w-[5px] bg-white overflow-hidden self-end">
            <motion.div
              initial={{ height: "0%" }}
              animate={solved ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
              className="absolute left-0 top-0 w-full bg-[#26CD87]"
            />
          </div>

          {/* Bottom horizontal green bar */}
          <div className="relative h-[5px] w-full bg-white overflow-hidden mt-auto">
            <motion.div
              initial={{ width: "0%" }}
              animate={solved ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="absolute right-0 bottom-0 h-full bg-[#26CD87]"
            />
          </div>
        </div>
      )}
      {index === 2 && (
        <div className="absolute w-[98%] h-[47%] z-20 bottom-[15%] right-[-98.5%] overflow-hidden flex flex-col">
          {/* Top horizontal green bar */}
          <div className="relative h-[5px] w-full bg-white overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={solved ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="absolute right-0 top-0 h-full bg-[#26CD87]"
            />
          </div>
          {/* Right vertical green bar */}
          <div className="relative h-full w-[5px] bg-white overflow-hidden self-end">
            <motion.div
              initial={{ height: "0%" }}
              animate={solved ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
              className="absolute left-0 bottom-0 w-full bg-[#26CD87]"
            />
          </div>
        </div>
      )}
      {index === 3 && (
        <div className="absolute w-[98%] h-[47%] z-20 bottom-[15%] left-[-98.5%] overflow-hidden flex flex-col">
          {/* Top horizontal green bar */}
          <div className="relative h-[5px] w-full bg-white overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={solved ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="absolute left-0 top-0 h-full bg-[#26CD87]"
            />
          </div>

          {/* Right vertical green bar */}
          <div className="relative h-full w-[5px] bg-white overflow-hidden self-start">
            <motion.div
              initial={{ height: "0%" }}
              animate={solved ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
              className="absolute left-0 bottom-0 w-full bg-[#26CD87]"
            />
          </div>
        </div>
      )}
      {index === 4 && (
        <div className="absolute w-[98%] h-[34%] z-20 bottom-[50%] left-[-98.5%] overflow-hidden flex flex-col">
          {/* Right vertical green bar */}
          <div className="relative h-full w-[5px] bg-white overflow-hidden self-start">
            <motion.div
              initial={{ height: "0%" }}
              animate={solved ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
              className="absolute left-0 top-0 w-full bg-[#26CD87]"
            />
          </div>

          {/* Bottom horizontal green bar */}
          <div className="relative h-[5px] w-full bg-white overflow-hidden mt-auto">
            <motion.div
              initial={{ width: "0%" }}
              animate={solved ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}
              className="absolute left-0 bottom-0 h-full bg-[#26CD87]"
            />
          </div>
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
      {solved === true && show === true ? (
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
