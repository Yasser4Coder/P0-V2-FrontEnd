import { useState } from "react";
import logo from "../assets/images/logo.png";
import login from "../assets/images/Login.svg";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="blur-background py-[15px] flex flex-col items-center">
      <div className="flex container mx-auto justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-[30px] sm:gap-[60px]">
          <div className="text-white hidden sm:flex text-[14px] gap-[40px]">
            <Link>Home</Link>
            <Link>Scoreboard</Link>
            <Link>Verses</Link>
          </div>
          <div onClick={handleClick} className="block sm:hidden">
            <AiOutlineBars className="text-white text-4xl cursor-pointer" />
          </div>
          <img src={login} alt="" className=" cursor-pointer" />
        </div>
      </div>
      {toggle && (
        <div
          className={`mt-[20px] text-white text-[14px] flex flex-col items-center gap-[30px] transition-all duration-300 ease-in-out transform ${
            toggle ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
        >
          <Link>Home</Link>
          <Link>Scoreboard</Link>
          <Link>Verses</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
