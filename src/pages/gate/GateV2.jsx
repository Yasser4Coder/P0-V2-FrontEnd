import React from "react";
import { useQuery } from "@tanstack/react-query";

import img from "../../assets/images/boss.webp";
import ChallengeCard from "./component/ChallengeCard";
import bg from "../../assets/gif/scoreboard.webp";
import Frame from "../../components/Frame";
import { useParams } from "react-router-dom";
import API from "../../apis/axiosInstance";
const fetchChallenges = async (wave) => {
  const { data } = await API.get(`challenges/wave/${wave}`);
  return data;
};

const GateV2 = () => {
  const { wave } = useParams();

  const {
    data: gateChallenges = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["challenges", wave],
    queryFn: () => fetchChallenges(wave),
    enabled: !!wave,
  });

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  const solvedCount = gateChallenges.filter(
    (challenge) => challenge.isSolved
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
        <div className="relative z-10 mt-[20px] max-h-[900px] h-[88vh] parent">
          {gateChallenges.map((challenge, index) => (
            <ChallengeCard
              key={challenge._id}
              divNum={index + 1}
              challengeName={challenge.title}
              categorie={challenge.category}
              points={challenge.points}
              // difficulty={challenge.difficulty}
              solved={challenge.isSolved}
              index={index + 1}
              to={`/submition/${challenge._id}`}
            />
          ))}
          <div className="div6 relative rounded-2xl border-2 border-white overflow-hidden">
            <img src={img} alt="" className="rounded-2xl object-center" />
            <div
              className="absolute top-0 flex items-center justify-center right-0 h-full bg-[#02d6f2a8] transition-all duration-500"
              style={{ width: `${100 - revealPercentage}%` }}
            >
              <div className="text-white text-4xl rotate-[-90deg] left-[65%] translate-x-[-50%] translate-y-[-50%]">
                {revealPercentage}%
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
};

export default GateV2;
