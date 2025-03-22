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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
