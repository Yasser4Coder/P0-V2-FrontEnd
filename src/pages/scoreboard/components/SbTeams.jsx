// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import first from "../../../assets/icons/first.png";
import secand from "../../../assets/icons/secand.png";
import third from "../../../assets/icons/third.png";
const SbTeams = () => {
  const teams = [
    { teamName: "D.CRAWLERS", points: 180.25 },
    { teamName: "A.TEAM", points: 210.5 },
    { teamName: "B.TEAM", points: 320.75 },
    { teamName: "C.TEAM", points: 520.9 },
    { teamName: "D.TEAM", points: 360.65 },
    { teamName: "E.TEAM", points: 280.45 },
    { teamName: "F.TEAM", points: 170.3 },
    { teamName: "G.TEAM", points: 360.8 },
    { teamName: "H.TEAM", points: 550.6 },
    { teamName: "I.TEAM", points: 260.4 },
    { teamName: "J.TEAM", points: 310.2 },
    { teamName: "K.TEAM", points: 120.95 },
    { teamName: "L.TEAM", points: 110.75 },
    { teamName: "M.TEAM", points: 210.55 },
  ];
  return (
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
              transition={{ duration: 4, type: "spring" }}
              className={`flex border-[1px] py-[8px] gap-[10%] border-white font-bold justify-between px-[30px] items-center 
            ${
              index === 0
                ? "w-full"
                : index === 1
                ? "w-[90%]"
                : index === 2
                ? "w-[80%]"
                : "w-[65%]"
            } text-white font-sulphur leading-[2.5rem] text-center text-md sm:text-2xl sm:tracking-[0.4rem]`}
            >
              {index === 0 && <img src={first} alt="" />}
              {index === 1 && <img src={secand} alt="" />}
              {index === 2 && <img src={third} alt="" />}
              {
                index > 2 && <p>{index + 1}</p> // Show index for teams other than top 3
              }
              <p>{team.teamName}</p>
              <p>{team.points}</p>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default SbTeams;
