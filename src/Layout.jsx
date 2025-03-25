import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Notification from "./components/Notification";

const Layout = () => {
  return (
    <div>
      <Notification />
      <Header />
      <div className="container min-h-[50vh] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
