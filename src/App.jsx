import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/404";
import Home from "./pages/home/Home";
import Layout from "./Layout";
import Dlayout from "./Dlayout";
import DashboardTab from "./pages/dashboard/DashboardTab";
import UsersTab from "./pages/dashboard/UsersTab";
import ChallengesTab from "./pages/dashboard/ChallengesTab";
import SubmissionsTab from "./pages/dashboard/SubmissionsTab";
import NotificationsTab from "./pages/dashboard/NotificationsTab";
import Login from "./pages/login/Login";
import Welcome from "./pages/welcome/Welcome";
import ScoreBoard from "./pages/scoreboard/ScoreBoard";
import Teams from "./pages/dashboard/teams";
import Announcement from "./pages/announcement/Announcement";
import { Toaster } from "react-hot-toast";
import NotificationPage from "./pages/notitfication/NotificationPage";
import Gates from "./pages/gates/Gates";
import GateV2 from "./pages/gate/GateV2";
import Timer from "./pages/timer/Timer";
import { GateProvider } from "./contexts/GateContext"; // Don't import useGate in App.js
import Status from "./pages/status/Status";

function App() {
  return (
    <GateProvider>
      {" "}
      {/* Wrap everything in the provider */}
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          {/* Main Layout Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="scoreboard" element={<ScoreBoard />} />
            <Route path="notification" element={<NotificationPage />} />
            <Route path="gates" element={<Gates />} />
            <Route path="announcement" element={<Announcement />} />
            <Route path="gate" element={<GateV2 />} />
            <Route path="timer" element={<Timer />} />
            <Route path="status" element={<Status />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>

          {/* Dashboard Layout Routes */}
          <Route path="/dashboard" element={<Dlayout />}>
            <Route index element={<DashboardTab />} />
            <Route path="users" element={<UsersTab />} />
            <Route path="challenges" element={<ChallengesTab />} />
            <Route path="submissions" element={<SubmissionsTab />} />
            <Route path="notifications" element={<NotificationsTab />} />
            <Route path="teams" element={<Teams />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GateProvider>
  );
}

export default App;
