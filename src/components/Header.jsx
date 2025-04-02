import { useState } from "react";
import logo from "../assets/images/logo.png";
import login from "../assets/images/Login.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  console.log(auth);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth"); // Remove user from local storage
    setAuth({}); // Clear auth state
    navigate("/");
  };
  return (
    <div className="blur-background relative z-50 py-[7px] flex flex-col items-center">
      <div className="flex container mx-auto justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-[30px] sm:gap-[60px]">
          <div className="text-white hidden font-sulphur sm:flex text-[14px] gap-[40px]">
            <Link to={auth?.user?.userName ? "/home" : "/"}>Home</Link>
            <Link to={"/scoreboard"}>Scoreboard</Link>
            <Link to={"/gates"}>Gates</Link>
            <Link to={"/announcement"}>announcements</Link>
            <Link to={"/status"}>status</Link>
            <Link to={"/timer"}>timer</Link>
          </div>
          <div onClick={handleClick} className="block sm:hidden">
            <AiOutlineBars className="text-white text-4xl cursor-pointer" />
          </div>
          {auth?.user?.userName ? (
            <div onClick={handleLogout} className="cursor-pointer">
              <img src={login} alt="" className=" rotate-180" />
            </div>
          ) : (
            <div
              onClick={() => {
                navigate("/login");
              }}
              className="cursor-pointer"
            >
              <img src={login} alt="" className="" />
            </div>
          )}
        </div>
      </div>
      {toggle && (
        <div
          className={`mt-[20px] text-white text-[14px] flex flex-col items-center gap-[30px] transition-all duration-300 ease-in-out transform ${
            toggle ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
        >
          <Link to={"/home"}>Home</Link>
          <Link to={"/scoreboard"}>Scoreboard</Link>
          <Link to={"/gates"}>Gates</Link>
          <Link to={"/announcement"}>announcements</Link>
          <Link to={"/status"}>status</Link>
          <Link to={"/timer"}>timer</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
