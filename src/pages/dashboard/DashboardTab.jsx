import React from "react";
import VideoEditForm from "./components/VideoEditForm";

const DashboardTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Users Overview</h2>
        <p className="text-3xl font-bold">length</p>
        <p className="text-gray-500">Total Users</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Challenges</h2>
        <p className="text-3xl font-bold">challenges</p>
        <p className="text-gray-500">Active Challenges</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Submissions</h2>
        <p className="text-3xl font-bold">submissions</p>
        <p className="text-gray-500">Total Submissions</p>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
        <VideoEditForm />
      </div>
    </div>
  );
};

export default DashboardTab;
