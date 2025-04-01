import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { GateProvider } from "./contexts/GateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import Status from "./pages/status/Status";
import Timer from "./pages/timer/Timer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GateProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          {/* Main Layout Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route element={<RequireAuth allowedRoles={["1112", "1"]} />}>
              <Route path="welcome" element={<Welcome />} />
              <Route path="scoreboard" element={<ScoreBoard />} />
              <Route path="notification" element={<NotificationPage />} />
              <Route path="gates" element={<Gates />} />
              <Route path="announcement" element={<Announcement />} />
              <Route path="gate" element={<GateV2 />} />
              <Route path="status" element={<Status />} />
              <Route path="timer" element={<Timer />} />
            </Route>
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="unauthorized" element={<Unauthorized />} />
          </Route>

          {/* Dashboard Layout Routes */}
          <Route element={<RequireAuth allowedRoles={["1112"]} />}>
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
          </Route>
        </Routes>
      </GateProvider>
    </QueryClientProvider>
  );
}

export default App;
