import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { socket } from "../../../../socket";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import first from "../../../assets/icons/first.png";
import second from "../../../assets/icons/secand.png";
import third from "../../../assets/icons/third.png";
import { useTeams } from "../../../apis/teams/seeAll"; // assuming useTeams is your custom hook for fetching data

const SbTeams = () => {
  const { auth } = useAuth();
  const { data: fetchedTeams, isLoading, error } = useTeams();
  const [teams, setTeams] = useState([]);
  const [rank, setRank] = useState(() => {
    const savedRank = localStorage.getItem("teamRank");
    return savedRank ? parseInt(savedRank) : null;
  });

  // Update teams when fetched teams change
  useEffect(() => {
    if (fetchedTeams) {
      const sorted = [...fetchedTeams].sort(
        (a, b) => b.totalScore - a.totalScore
      );
      setTeams(sorted);
      updateLocalRankAndPoints(sorted);
    }
  }, [fetchedTeams]);

  // Listen for real-time updates using Socket.io
  useEffect(() => {
    // Listen for the real-time update event
    socket.on("teams:update", (updatedTeam) => {
      // Update the teams list when a real-time update happens
      setTeams((prevTeams) => {
        const updatedTeams = [...prevTeams];
        const index = updatedTeams.findIndex(
          (team) => team._id === updatedTeam._id
        );
        if (index !== -1) {
          updatedTeams[index] = updatedTeam;
        }
        return updatedTeams.sort((a, b) => b.totalScore - a.totalScore); // Re-sort teams after the update
      });

      // Update localStorage with new rank and total points
      updateLocalRankAndPoints(teams);
    });

    // Cleanup on component unmount
    return () => {
      socket.off("teams:update");
    };
  }, [teams]);

  // Function to update rank and points in localStorage
  const updateLocalRankAndPoints = (sortedTeams) => {
    const foundIndex = sortedTeams.findIndex(
      (team) => team.name === auth?.team?.teamName
    );
    if (foundIndex !== -1) {
      const newRank = foundIndex + 1;
      const newPoints = sortedTeams[foundIndex].totalScore;

      // Update localStorage with new rank and points
      setRank(newRank); // Update the state to re-render the UI
      localStorage.setItem("teamRank", newRank);
      localStorage.setItem("teamPoints", newPoints);
    }
  };

  if (isLoading || !teams.length) {
    return <p className="text-white text-center">Loading...</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center">Error loading teams</p>;
  }

  return (
    <div className="flex flex-col gap-[10px] w-[80%]">
      <AnimatePresence>
        {teams.map((team, index) => (
          <motion.div
            key={team.id || team.name}
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 3, type: "spring" }}
            className={`flex border-[1px] py-[8px] gap-[10%] border-white font-bold justify-between px-[30px] items-center 
              ${
                index === 0
                  ? "w-full"
                  : index === 1
                  ? "w-[90%]"
                  : index === 2
                  ? "w-[80%]"
                  : "w-[65%]"
              } 
              text-white font-sulphur leading-[2.5rem] text-center text-md sm:text-2xl sm:tracking-[0.4rem]`}
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
