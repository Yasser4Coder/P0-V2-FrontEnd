import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import img from "../../assets/images/boss.webp";
import bg from "../../assets/gif/scoreboard.webp";

import ChallengeCard from "./component/ChallengeCard";
import Frame from "../../components/Frame";
import API from "../../apis/axiosInstance";
import useAuth from "../../hooks/useAuth";

const fetchChallenges = async (wave) => {
  const { data } = await API.get(`challenges/wave/${wave}`);
  return data;
};

const GateV2 = () => {
  const { wave } = useParams();
  const { auth } = useAuth();
  const teamId = auth.team.teamId;

  const [teamSubmissions, setTeamSubmissions] = useState([]);

  const { data: gateChallenges = [], error } = useQuery({
    queryKey: ["challenges", wave],
    queryFn: () => fetchChallenges(wave),
    enabled: !!wave,
  });

  useEffect(() => {
    const fetchSubmissionsByTeam = async () => {
      try {
        const { data } = await API.get(`submissions/team/${teamId}`);
        setTeamSubmissions(data);
      } catch (err) {
        console.error("Failed to fetch submissions", err);
      }
    };
    if (teamId) fetchSubmissionsByTeam();
  }, [teamId]);

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  // ✅ Get only solved submissions (status === "reviewed" and isSolved === true)
  const solvedChallengeIds = teamSubmissions
    .filter((sub) => sub.status === "reviewed" && sub.isSolved === true)
    .map((sub) => sub.challengeId._id);

  const revealPercentage =
    gateChallenges.length > 0
      ? (solvedChallengeIds.length / gateChallenges.length) * 100
      : 0;

  return (
    <div>
      <img
        src={bg}
        alt=""
        className="z-0 fixed w-full h-full bg-center top-0 left-0 bg-contain"
      />
      <Frame extraEdit={"py-[20px] px-[40px] mt-[40px]"}>
        <div className="relative z-10 mt-[20px] max-h-[900px] h-[88vh] parent">
          {gateChallenges.map((challenge, index) => (
            <ChallengeCard
              key={challenge._id}
              divNum={index + 1}
              challengeName={challenge.title}
              categorie={challenge.category}
              points={challenge.points}
              solved={solvedChallengeIds.includes(challenge._id)}
              index={index + 1}
              to={`/submition/${challenge._id}`}
            />
          ))}
          <div className="div5 relative rounded-2xl border-2 border-white overflow-hidden">
            <img src={img} alt="" className="rounded-2xl object-center" />
            <div
              className="absolute top-0 flex items-center justify-center right-0 h-full bg-[#02d6f2a8] transition-all duration-500"
              style={{ width: `${100 - revealPercentage}%` }}
            >
              <div className="text-white text-4xl">
                {Math.floor(revealPercentage)}%
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default GateV2;
