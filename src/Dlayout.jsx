import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Award, Users, Eye, Bell, Search } from "lucide-react";

const Dlayout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">P0 Platform Dashboard</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Award className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/dashboard/teams"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Award className="w-5 h-5" />
              <span>Teams</span>
            </Link>

            <Link
              to="/dashboard/users"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Users className="w-5 h-5" />
              <span>Users</span>
            </Link>

            <Link
              to="/dashboard/challenges"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Award className="w-5 h-5" />
              <span>Add Challenges</span>
            </Link>
            <Link
              to="/dashboard/getAllChallenges"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Award className="w-5 h-5" />
              <span>All Challenges</span>
            </Link>

            <Link
              to="/dashboard/submissions"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Eye className="w-5 h-5" />
              <span>Submissions</span>
            </Link>

            <Link
              to="/dashboard/notifications"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6 flex">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-white"
                placeholder="Search..."
              />
            </div>
          </div>
          <Outlet /> {/* ✅ Renders child components dynamically */}
        </main>
      </div>
    </div>
  );
};

export default Dlayout;
