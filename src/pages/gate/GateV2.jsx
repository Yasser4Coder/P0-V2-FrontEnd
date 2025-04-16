/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
// igritGif
import igrit from "../../assets/bgs/gates/igrit.webp";
import igritGif from "../../assets/gif/igrit.gif";

// kargalgan

import kargalgan from "../../assets/gif/kargalgan.webp";
import kargalganGif from "../../assets/gif/kargalganGif.gif";

// Baran

import Baran from "../../assets/gif/Baran.webp";
import BaranGif from "../../assets/gif/Baran.gif";
import Baran1 from "../../assets/gif/Baran1.jpg";

// Ant King
import AntKing from "../../assets/gif/AntKing.jpg";
import AntKingGif from "../../assets/gif/AntKing.gif";
import AntKing1 from "../../assets/images/boss1.jpg";

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
  const [showGif, setShowGif] = useState(true);
  const [showFixBg, setShowFixBg] = useState(false);

  const [teamSubmissions, setTeamSubmissions] = useState([]);

  const {
    data: gateChallenges = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["challenges", wave],
    queryFn: () => fetchChallenges(wave),
    enabled: !!wave,
  });

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setShowGif(false);
        setShowFixBg(true);
      },
      wave == 3 || wave == 4 ? 5000 : 4100
    );
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

  if (isLoading)
    return (
      <div>
        <img
          src={
            wave == 1
              ? igritGif
              : wave == 2
              ? kargalganGif
              : wave == 3
              ? BaranGif
              : AntKingGif
          }
          alt=""
          className="z-0 fixed w-full h-full flex items-center justify-center bg-center top-0 left-0 bg-contain"
        />

        <span class="loader"></span>
      </div>
    );
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  // ✅ Get only solved submissions (status === "reviewed" and isSolved === true)
  const solvedChallengeIds = teamSubmissions
    .filter((sub) => sub.status === "reviewed" && sub.isSolved === true)
    .map((sub) => sub.challengeId?._id);

  const revealPercentage =
    gateChallenges.length > 0
      ? (solvedChallengeIds.length / gateChallenges.length) * 100
      : 0;

  return (
    <div>
      {showGif && (
        <img
          src={
            wave == 1
              ? igritGif
              : wave == 2
              ? kargalganGif
              : wave == 3
              ? BaranGif
              : AntKingGif
          }
          alt=""
          className="z-0 fixed w-full h-full bg-center top-0 left-0 bg-contain"
        />
      )}
      {showFixBg && (
        <img
          src={
            wave == 1
              ? igrit
              : wave == 2
              ? kargalgan
              : wave == 3
              ? Baran
              : AntKing
          }
          alt=""
          className="z-0 fixed w-full h-full bg-center top-0 left-0 bg-contain"
        />
      )}
      {showFixBg && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }} // Start position
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
          <Frame extraEdit={"py-[20px] px-[40px] mt-[40px]"}>
            <div className="relative z-10 mt-[20px] max-h-[900px] h-[88vh] parent">
              {gateChallenges?.map((challenge, index) => (
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
                <img
                  src={
                    wave == 1
                      ? igrit
                      : wave == 2
                      ? kargalgan
                      : wave == 3
                      ? Baran1
                      : AntKing1
                  }
                  alt=""
                  className="rounded-3xl h-full w-full object-cover object-center"
                />
                {Math.floor(revealPercentage) === 100 ? (
                  ""
                ) : (
                  <div className="text-white absolute top-[50%] z-20 left-[50%] translate-x-[-50%] translate-y-[-50%] text-4xl">
                    {Math.floor(revealPercentage)}%
                  </div>
                )}
                <div
                  className="absolute top-0 flex items-center justify-center right-0 h-full bg-[#02d6f2a8] transition-all duration-500"
                  style={{ width: `${100 - revealPercentage}%` }}
                ></div>
              </div>
            </div>
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default GateV2;
