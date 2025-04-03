import { motion, AnimatePresence } from "framer-motion";
import first from "../../../assets/icons/first.png";
import second from "../../../assets/icons/secand.png";
import third from "../../../assets/icons/third.png";
import { useTeams } from "../../../apis/teams/seeAll";

const SbTeams = () => {
  const { data: teams, isLoading, error } = useTeams();

  if (isLoading) return <p className="text-white text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error loading teams</p>;

  return (
    <div className="flex flex-col gap-[10px] w-[80%]">
      <AnimatePresence>
        {teams?.sort((a, b) => b.totalScore - a.totalScore).map((team, index) => (
          <motion.div
            key={team.id || team.name}
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, type: "spring" }}
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
            {index === 0 && <img src={first} alt="First place" />}
            {index === 1 && <img src={second} alt="Second place" />}
            {index === 2 && <img src={third} alt="Third place" />}
            {index > 2 && <p>{index + 1}</p>}
            <p>{team.name}</p>
            <p>{team.totalScore}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SbTeams;
