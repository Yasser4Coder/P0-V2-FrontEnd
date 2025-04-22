import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Award,
  Users,
  Bell,
  Home,
  ShieldUser,
  ShieldQuestion,
  Refrigerator,
  ClipboardPlus,
  BookMarked,
  ArrowUpWideNarrow,
} from "lucide-react";
import Notification from "./components/Notification";

const Dlayout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Notification hidden={true} />
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
              <Home className="w-5 h-5" />
              <span>home</span>
            </Link>
            <Link
              to="/dashboard/teams"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <ShieldUser className="w-5 h-5" />
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
              to="/dashboard/usersrank"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <ArrowUpWideNarrow className="w-5 h-5" />
              <span>Users Rank</span>
            </Link>
            <Link
              to="/dashboard/mentors"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <ShieldQuestion className="w-5 h-5" />
              <span>Mentors Calls</span>
            </Link>
            <Link
              to="/dashboard/needs"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Refrigerator className="w-5 h-5" />
              <span>Users Needs</span>
            </Link>
            <Link
              to="/dashboard/allchallenges"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Refrigerator className="w-5 h-5" />
              <span>All challanges</span>
            </Link>

            <Link
              to="/dashboard/challenges"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <ClipboardPlus className="w-5 h-5" />
              <span>Add Challenges</span>
            </Link>
            <Link
              to="/dashboard/getAllChallenges"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <BookMarked className="w-5 h-5" />
              <span>All Challenges</span>
            </Link>

            <Link
              to="/dashboard/submissions"
              className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
            >
              <Award className="w-5 h-5" />
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
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dlayout;
