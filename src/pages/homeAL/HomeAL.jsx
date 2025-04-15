import React, { useEffect, useState } from "react";
import bgimg from "../../assets/gif/welcom.webp";
import bgimgFix from "../../assets/bgs/Welcome Page.png";
import Frame from "../../components/Frame";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";
import Peragraph from "../../components/Peragraph";
import VideoPlayer from "./components/VideoPlayer";
import NextMeal from "./components/NextMeal";
import CallMentor from "./components/CallMentor";
import Needs from "./components/Needs";
import API from "../../apis/axiosInstance";
import toast from "react-hot-toast";

// Function to fetch video URLs from the backend
const fetchVideos = async () => {
  try {
    const response = await API.get("/videos");
    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return { video1: null, video2: null }; // Return null for both videos if there's an error
  }
};

const HomeAL = () => {
  const [fixBg, setFixBg] = useState(bgimg);
  const [vid1, setVid1] = useState(null); // Set initial state to null
  const [vid2, setVid2] = useState(null); // Set initial state to null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideosData = async () => {
      const data = await fetchVideos(); // Fetch videos using the function
      setVid1(data.video1 || null); // Set to null if empty
      setVid2(data.video2 || null); // Set to null if empty
      setLoading(false);
    };

    // Fetch the videos when the component mounts
    getVideosData();

    // Update background after 4 seconds
    const timer = setTimeout(() => {
      setFixBg(bgimgFix);
    }, 4000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this only runs once on mount

  // Function to update video URLs
  const updateVideos = async () => {
    const payload = {};

    // Only add non-empty values to the payload
    if (vid1) payload.video1 = vid1;
    if (vid2) payload.video2 = vid2;

    if (Object.keys(payload).length === 0) {
      toast.error("Please provide at least one video URL.");
      return;
    }

    try {
      await API.put("/videos", payload);
      toast.success("Videos updated successfully!");
    } catch (error) {
      console.error("Failed to update videos:", error);
      toast.error("Failed to update videos.");
    }
  };

  if (loading) return <p className="text-gray-600">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[30px]">
      <img
        src={fixBg}
        alt="background"
        className="z-0 fixed w-full h-full bg-center bg-cover top-0 left-0 object-cover"
      />
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }} // Start position
        animate={{ opacity: 1, y: 0 }} // End position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      >
        <Frame extraEdit="flex flex-col duration-2000 ease-out transition-all py-[30px] gap-[30px] px-[15px] items-center justify-center">
          <WorningTitle icon={true} title={"WELCOME TO PROJECT 0"} />
          <Peragraph>you are in the system right now</Peragraph>
          <div className="w-[85%] flex items-center gap-[40px]">
            {/* Only render VideoPlayer if the URL exists */}
            {vid1 && <VideoPlayer src={vid1} />}
            {vid2 && <VideoPlayer src={vid2} />}
          </div>
        </Frame>
      </motion.div>
      <div className="w-full flex items-center mb-[40px] gap-[60px] justify-between">
        <NextMeal />
        <CallMentor />
        <Needs />
      </div>

      {/* Button to update the video URLs */}
      <button
        onClick={updateVideos}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Videos
      </button>
    </div>
  );
};

export default HomeAL;
