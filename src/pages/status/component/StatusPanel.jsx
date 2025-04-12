import { useState, useEffect } from "react";

import { Code, Cpu, Feather, Box, CircleUser } from "lucide-react";
import { useGetSubmissionScoresByCategory } from "../../../apis/Submitions/getSubmissionScoresByCategory";

export default function StatusPanel({ staticData }) {
  const [rank] = useState(() => {
    const savedRank = localStorage.getItem("teamRank");
    return savedRank ? parseInt(savedRank) : null;
  });
  const { data: submissionScores } = useGetSubmissionScoresByCategory(
    staticData?.team?.teamId
  );

  const aiTotal =
    submissionScores?.AI?.reduce((acc, value) => acc + value, 0) || 0;
  const csTotal =
    submissionScores?.CS?.reduce((acc, value) => acc + value, 0) || 0;
  const psTotal =
    submissionScores?.PS?.reduce((acc, value) => acc + value, 0) || 0;
  const gdTotal =
    submissionScores?.GD?.reduce((acc, value) => acc + value, 0) || 0;

  const userData = {
    name: staticData?.user?.userName,
    ranking: rank,
    team: staticData?.team?.teamName,
    skills: {
      cs: csTotal,
      ai: aiTotal,
      ps: psTotal,
      gd: gdTotal,
    },
  };

  // Fallback values for skills
  userData.skills.cs = userData.skills.cs || 0;
  userData.skills.ai = userData.skills.ai || 0;
  userData.skills.ps = userData.skills.ps || 0;
  userData.skills.gd = userData.skills.gd || 0;

  // Calculate total points of all skills
  const totalPoints =
    userData.skills.cs +
    userData.skills.ai +
    userData.skills.ps +
    userData.skills.gd;

  // use effect for user data skills
  useEffect(() => {
    const updateSkills = () => {
      userData.skills.cs = csTotal;
      userData.skills.ai = aiTotal;
      userData.skills.ps = psTotal;
      userData.skills.gd = gdTotal;
    };

    updateSkills();
  }, [csTotal, aiTotal, psTotal, gdTotal]);

  return (
    <div className="relative z-10 mx-auto w-[90%] max-w-full rounded-3xl p-8">
      <div className="mb-12 flex items-center justify-center">
        <div className="text-center">
          <div className="text-[8rem] font-light tracking-wider text-white glow-text">
            {userData.ranking}
          </div>
          <div className="text-2xl font-light text-white">Ranking</div>
        </div>

        <div className="ml-12 text-white font-sulphur text-2xl flex flex-col items-start">
          <div className="mb-2">
            <span className="opacity-70">name:</span>{" "}
            <span className="text-xl">{userData.name}</span>
          </div>
          <div>
            <span className="opacity-70">team:</span>{" "}
            <span className="text-xl">{userData.team}</span>
          </div>
        </div>
      </div>

      {/* Skills panel */}
      <div className="mx-auto max-w-2xl rounded-md border border-white/20 bg-blue-900/10 p-8">
        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          {/* Left column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Code className="mr-2 text-white" size={20} />
                <span className="text-white">CS</span>
              </div>
              <span className="text-3xl font-light text-white glow-text">
                {userData.skills.cs}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Cpu className="mr-2 text-white" size={20} />
                <span className="text-white">AI</span>
              </div>
              <span className="text-3xl font-light text-white glow-text">
                {userData.skills.ai}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Box className="mr-2 text-white" size={20} />
                <span className="text-white">PS</span>
              </div>
              <span className="text-3xl font-light text-white glow-text">
                {userData.skills.ps}
              </span>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Feather className="mr-2 text-white" size={20} />
                <span className="text-white">GD</span>
              </div>
              <span className="text-3xl font-light text-white glow-text">
                {userData.skills.gd}
              </span>
            </div>

            <div className="flex items-center justify-between pt-5">
              <div className="text-right text-xs text-white opacity-70">
                total
                <br />
                of
                <br />
                points
              </div>
              <span className="text-5xl font-light text-white glow-text">
                {totalPoints}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.7),
            0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
