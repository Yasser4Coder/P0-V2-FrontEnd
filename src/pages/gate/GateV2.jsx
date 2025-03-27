import React from "react";
import img from "../../assets/images/RedKnight.jpg";
import ChallengeCard from "./component/ChallengeCard";
import bg from "../../assets/gif/scoreboard.webp";

const GateV2 = () => {
  const gateChallenges = [
    {
      challengeName: "AI Pathfinding",
      categorie: "ai",
      points: 150,
      difficulty: "B",
      solved: false,
    },
    {
      challengeName: "UI/UX Redesign",
      categorie: "design",
      points: 120,
      difficulty: "C",
      solved: false,
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
      solved: true,
    },
    {
      challengeName: "Penetration Testing",
      categorie: "cyber.s",
      points: 100,
      difficulty: "A",
      solved: false,
    },
  ];
  return (
    <div>
      <img
        src={bg}
        alt=""
        className="z-0 fixed w-full h-full bg-center top-0 left-0 bg-contain"
      />
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
          />
        ))}
        <div className="div6 rounded-2xl border-2 border-white">
          <img src={img} alt="" className="w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default GateV2;
