import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
import bg from "../../assets/gif/scoreboard1.gif";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";
import GateCard from "./components/GateCard";

const initialGates = [
  {
    open: false,
    date: "2025-04-16T11:24:40.000Z",
    number: 1,
    title: "Igris: The Red Knight",
    desc: "The system is activated. Discover the challenges waiting for you in the gates. You will play against time and hard challenges.",
  },
  {
    open: false,
    date: "2025-04-16T11:24:40.000Z",
    number: 2,
    title: "Igris: The Red Knight",
    desc: "The system is activated. Discover the challenges waiting for you in the gates. You will play against time and hard challenges.",
  },
  {
    open: false,
    date: "2025-04-24T16:00:00.000Z",
    number: 3,
    title: "Igris: The Red Knight",
    desc: "The system is activated. Discover the challenges waiting for you in the gates. You will play against time and hard challenges.",
  },
  {
    open: false,
    date: "2025-04-24T18:00:00.000Z",
    number: 4,
    title: "Igris: The Red Knight",
    desc: "The system is activated. Discover the challenges waiting for you in the gates. You will play against time and hard challenges.",
  },
];

const Gates = () => {
  const [showFrame, setShowFrame] = useState(false);

  const [gates, setGates] = useState(initialGates);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFrame(true);
    }, 1500); // Show after 1 second

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const updatedGates = gates.map((gate) => {
      const gateDate = new Date(gate.date);
      return {
        ...gate,
        open: currentDate >= gateDate,
      };
    });
    setGates(updatedGates);
  }, [gates]);

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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Frame
            extraEdit={`flex flex-col duration-2000 ease-out transition-all py-[80px] gap-[50px] px-[15px] items-center justify-center`}
          >
            <WorningTitle title={"Enter a Gate"} />

            <div className="grid grid-cols-2 grid-rows-2 gap-[30px] w-[80%]">
              {gates.slice(0, 4).map((gate, index) => (
                <GateCard
                  key={index}
                  open={gate.open}
                  date={gate.date}
                  title={gate.title}
                  desc={gate.desc}
                  gateNumber={gate.number}
                />
              ))}
            </div>
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default Gates;
