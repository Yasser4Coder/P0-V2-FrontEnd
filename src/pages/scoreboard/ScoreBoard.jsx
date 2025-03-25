import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
import bg from "../../assets/bgs/Scoreboard1.png";
import first from "../../assets/icons/first.png";
import secand from "../../assets/icons/secand.png";
import third from "../../assets/icons/third.png";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";
const Home = () => {
  const [showFrame, setShowFrame] = useState(false);

  const teams = [
    { teamName: "D.CRAWLERS", points: 166.98 },
    { teamName: "A.TEAM", points: 200.45 },
    { teamName: "B.TEAM", points: 280.32 },
    { teamName: "C.TEAM", points: 200.67 },
    { teamName: "D.TEAM", points: 250.52 },
    { teamName: "E.TEAM", points: 170.89 },
    { teamName: "F.TEAM", points: 160.45 },
    { teamName: "G.TEAM", points: 550.78 },
    { teamName: "H.TEAM", points: 140.56 },
    { teamName: "I.TEAM", points: 130.34 },
    { teamName: "J.TEAM", points: 300.12 },
    { teamName: "K.TEAM", points: 110.98 },
    { teamName: "L.TEAM", points: 100.67 },
    { teamName: "M.TEAM", points: 90.45 },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFrame(true);
    }, 1500); // Show after 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center mt-[495px] justify-center w-full h-[calc(100vh-65px)]">
      <img
        src={bg}
        alt=""
        className="z-0 fixed w-full h-full bg-center bg-cover top-0 left-0 object-cover"
      />
      {showFrame && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }} // Start position
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
          <Frame
            extraEdit={`flex flex-col duration-2000 mb-[50px] ease-out transition-all py-[80px] gap-[50px] px-[15px] items-center justify-center`}
          >
            <WorningTitle extraStyle={"min-w-[400px]"} title={"Scoreboard"} />
            <p className="text-white font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]">
              Your Team D.CRAWLERS is in The 06th Place with 166.98 Points
            </p>
            <div className="flex flex-col gap-[10px] w-[80%]">
              <AnimatePresence>
                {teams
                  .sort((a, b) => b.points - a.points) // Sort teams based on points
                  .map((team, index) => (
                    <motion.div
                      key={team.teamName} // Use team name as key to track changes
                      layout // Enables smooth movement when order changes
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 2, type: "spring" }}
                      className={`flex border-[1px] py-[13px] gap-[10%] border-white font-bold justify-center items-center 
            ${
              index === 0
                ? "w-full"
                : index === 1
                ? "w-[90%]"
                : index === 2
                ? "w-[80%]"
                : "w-[65%]"
            } text-white font-sulphur leading-[2.5rem] text-center text-3xl tracking-[0.4rem]`}
                    >
                      {index === 0 && <img src={first} alt="" />}
                      {index === 1 && <img src={secand} alt="" />}
                      {index === 2 && <img src={third} alt="" />}
                      <p>{index + 1}</p>
                      <p>{team.teamName}</p>
                      <p>{team.points}</p>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
