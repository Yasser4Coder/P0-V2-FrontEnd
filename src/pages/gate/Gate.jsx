import bg from "../../assets/gif/scoreboard.webp";
import { useEffect, useState } from "react";
import ChallengeCard from "./component/CardChallenge";
import CentralNode from "./component/CentralNode";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function Gate() {
  const [showFrame, setShowFrame] = useState(false);

  {
    /* When we fetch datata we will remove the this examle data of challenges */
  }
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      name: "the challenge name",
      category: "cyber.s",
      points: 100,
      difficulty: "A",
      status: "solved",
      position: "top-left",
    },
    {
      id: 2,
      name: "the challenge name",
      category: "AI",
      points: 100,
      difficulty: "A",
      status: "next",
      position: "top-center",
    },
    {
      id: 3,
      name: "the challenge name",
      category: "grafic.d",
      points: 100,
      difficulty: "B",
      status: "next",
      position: "top-right",
    },
    {
      id: 4,
      name: "the challenge name",
      category: "p.solving",
      points: 100,
      difficulty: "A",
      status: "next",
      position: "bottom-left",
    },
    {
      id: 5,
      name: "the challenge name",
      category: "UIUX",
      points: 100,
      difficulty: "s",
      status: "next",
      position: "bottom-right",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFrame(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-[60px]">
      <img
        src={bg}
        alt=""
        className="z-0 fixed w-full h-full bg-center top-0 left-0 bg-contain"
      />
      {showFrame && (
        <motion.div
          className="flex gap-2 p-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Connection lines */}
          <svg
            className="absolute inset-0 z-10 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="25%"
              y1="30%"
              x2="50%"
              y2="50%"
              stroke="#0f8"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="50%"
              y1="30%"
              x2="50%"
              y2="50%"
              stroke="#0af"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="75%"
              y1="30%"
              x2="50%"
              y2="50%"
              stroke="#0af"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="25%"
              y1="70%"
              x2="50%"
              y2="50%"
              stroke="#0af"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="75%"
              y1="70%"
              x2="50%"
              y2="50%"
              stroke="#0af"
              strokeWidth="2"
              opacity="0.6"
            />
          </svg>

          {/* Challenge cards */}
          <div className="relative z-20 grid h-full w-full grid-cols-3 grid-rows-3 gap-4 p-5">
            <div className="col-start-1 row-start-1 flex items-center justify-center">
              <ChallengeCard challenge={challenges[0]} variant="green" />
            </div>
            <div className="col-start-2 row-start-1 flex items-center justify-center">
              <ChallengeCard challenge={challenges[1]} variant="blue" />
            </div>
            <div className="col-start-3 row-start-1 flex items-center justify-center">
              <ChallengeCard challenge={challenges[2]} variant="blue" />
            </div>

            <div className="col-start-2 row-start-2 flex items-center justify-center">
              {/* the central node is here */}
              <CentralNode />
            </div>

            <div className="col-start-1 row-start-3 flex items-center justify-center">
              <ChallengeCard challenge={challenges[3]} variant="blue" />
            </div>
            <div className="col-start-3 row-start-3 flex items-center justify-center">
              <ChallengeCard challenge={challenges[4]} variant="blue" />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Gate;
