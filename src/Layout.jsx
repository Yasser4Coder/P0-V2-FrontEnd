import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Notification from "./components/Notification";

const Layout = () => {
  return (
    <div>
      <Notification />
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
