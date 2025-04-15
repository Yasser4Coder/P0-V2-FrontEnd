import React, { useEffect, useState } from "react";
import VideoEditForm from "./components/VideoEditForm";
import AddAnnouncement from "./components/AddAnnouncement";
import { useUsers } from "../../apis/users/seeAll";
import { useChallenges } from "../../apis/Challenges/seeAll";
import API from "../../apis/axiosInstance";

const DashboardTab = () => {
  const { data: users, isLoading } = useUsers();
  const { data: challenges, isLoadingChallange } = useChallenges();
  const [data, setData] = useState([]);
  const fetchSubmissions = async () => {
    try {
      const response = await API.get("/submissions");
      setData(response.data);
    } catch (err) {
      console.error("Error fetching submissions:", err);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-pulse">
          <h2 className="h-6 bg-gray-300 rounded w-1/3 mb-4"></h2>
          <p className="h-10 bg-gray-300 rounded w-1/2 mb-2"></p>
          <p className="h-4 bg-gray-300 rounded w-1/4"></p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Users Overview</h2>
          <p className="text-3xl font-bold">{users?.length}</p>
          <p className="text-gray-500">Total Users</p>
        </div>
      )}
      {isLoadingChallange ? (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-pulse">
          <h2 className="h-6 bg-gray-300 rounded w-1/3 mb-4"></h2>
          <p className="h-10 bg-gray-300 rounded w-1/2 mb-2"></p>
          <p className="h-4 bg-gray-300 rounded w-1/4"></p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Challenges</h2>
          <p className="text-3xl font-bold">{challenges?.length}</p>
          <p className="text-gray-500">Challenges</p>
        </div>
      )}
      {isLoading ? (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md animate-pulse">
          <h2 className="h-6 bg-gray-300 rounded w-1/3 mb-4"></h2>
          <p className="h-10 bg-gray-300 rounded w-1/2 mb-2"></p>
          <p className="h-4 bg-gray-300 rounded w-1/4"></p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Submissions</h2>
          <p className="text-3xl font-bold">{data?.length}</p>
          <p className="text-gray-500">Total Submissions</p>
        </div>
      )}

      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-xl my-[20px]">
          Edit the home page videos
        </h1>
        <VideoEditForm />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-center font-bold text-xl my-[20px]">
          Send Announcement
        </h1>
        <AddAnnouncement />
      </div>
    </div>
  );
};

export default DashboardTab;
