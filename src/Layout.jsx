import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Notification from "./components/Notification";
import FullScreen from "./components/FullScreen";

const Layout = () => {
  return (
    <div>
      <Notification />
      <FullScreen />
      <Header />
      <FullScreen />
      <div className="container min-h-[50vh] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
