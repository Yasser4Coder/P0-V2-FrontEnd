import React from "react";
import img from "../../assets/images/boss.webp";
import ChallengeCard from "./component/ChallengeCard";
import bg from "../../assets/gif/scoreboard.webp";
import Frame from "../../components/Frame";

const GateV2 = () => {
  const gateChallenges = [
    {
      challengeName: "AI Pathfinding",
      categorie: "ai",
      points: 150,
      difficulty: "B",
      solved: true,
    },
    {
      challengeName: "UI/UX Redesign",
      categorie: "design",
      points: 120,
      difficulty: "C",
      solved: true,
    },
    {
      challengeName: "Algorithm Optimization",
      categorie: "problem-solving",
      points: 200,
      difficulty: "A",
      solved: false,
    },
    {
      challengeName: "Neural Network Tuning",
      categorie: "ai",
      points: 180,
      difficulty: "B",
      solved: false,
    },
    {
      challengeName: "Penetration Testing",
      categorie: "cyber.s",
      points: 100,
      difficulty: "A",
      solved: false,
    },
  ];
  const solvedCount = gateChallenges.filter(
    (challenge) => challenge.solved
  ).length;
  const revealPercentage = (solvedCount / gateChallenges.length) * 100;

  return (
    <div>
      <img
        src={bg}
        alt=""
        className="z-0 fixed w-full h-full bg-center top-0 left-0 bg-contain"
      />
      <Frame extraEdit={"py-[20px] px-[40px] mt-[40px]"}>
        <div className=" relative z-10 mt-[20px] max-h-[900px] h-[88vh] parent">
          {gateChallenges.map((chllenge, index) => (
            <ChallengeCard
              divNum={index + 1}
              challengeName={chllenge.challengeName}
              categorie={chllenge.categorie}
              points={chllenge.points}
              difficulty={chllenge.difficulty}
              solved={chllenge.solved}
              index={index + 1}
              to={"/challenge"}
            />
          ))}
          <div className="div6 relative rounded-2xl border-2 border-white overflow-hidden">
            {/* Image */}
            <img src={img} alt="" className="rounded-2xl object-center" />

            {/* Gray Overlay */}
            <div
              className="absolute top-0 flex items-center justify-center right-0 h-full bg-[#02d6f2a8] transition-all duration-500"
              style={{ width: `${100 - revealPercentage}%` }}
            >
              {100 - revealPercentage === 100 ? (
                <div className="text-white text-4xl rotate-[-90deg] left-[65%] translate-x-[-50%] translate-y-[-50%]">
                  {revealPercentage}%
                </div>
              ) : (
                <div className="text-white text-4xl rotate-[-90deg] left-[65%] translate-x-[-50%] translate-y-[-50%]">
                  {revealPercentage}%
                </div>
              )}
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default GateV2;
