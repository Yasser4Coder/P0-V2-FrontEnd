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
import { Toaster } from "react-hot-toast";
// mounir
// yasser
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {/* Main Layout Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="scoreboard" element={<ScoreBoard />} />
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
  );
}

export default App;
