import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BiSolidLeftArrow } from "react-icons/bi";

import WorningTitle from "../../components/WorningTitle";
import BackGround from "../home/components/BackGround";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showFrame, setShowFrame] = useState(false);
  const [character, setCharacter] = useState("center");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dark, setDark] = useState(false);
  const [start, setStart] = useState(false);
  const [error, setError] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setCharacter("left");
    const timer = setTimeout(() => {
      setShowFrame(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError(true);
      setErrorMassage("Please fill all fields");
      setTimeout(() => {
        setError(false);
        setErrorMassage("");
      }, 2000); // Remove shake after animation
      return;
    }

    // منيير الكود هذا كامل ديرو كي كي ريكواست تكون صحيحة
    setShowFrame(false);
    setCharacter("center");
    setTimeout(() => {
      setStart(true);
      setDark(true);
      setTimeout(() => {
        navigate("/welcome");
      }, 2000);
    }, 1000);
    // هنا يخلاص كوبي كولي برك
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-65px)]">
      <BackGround character={character} todark={dark} />
      {start && (
        <div className="text-white fixed top-[50%] left-[50%] translate-x-[-50%] z-30 translate-y-[-50%] font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]">
          starting...
        </div>
      )}
      {showFrame && (
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }} // Start position
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
          <Frame
            extraEdit={
              "py-[40px] px-[15px] relative items-center justify-center flex flex-col"
            }
          >
            <div
              onClick={() => {
                navigate(-1);
              }}
              className="absolute top-[30px] left-[30px] cursor-pointer drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]"
            >
              <BiSolidLeftArrow className="text-[3rem] text-white" />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[20px] items-center justify-center"
            >
              <WorningTitle extraStyle={"w-[300px]"} title={"LOGIN"} />
              <p className="text-white font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]">
                login using the username and password given to you <br /> in the
                discord server
              </p>
              <div className="w-full flex flex-col gap-[15px] items-start">
                <label
                  htmlFor=""
                  className="text-white font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]"
                >
                  username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`border-[1px] px-[20px] text-white font-sulphur w-full h-[50px] text-2xl focus:outline-none focus:drop-shadow-[0_0_10px_rgba(255,255,200,0.9)] ${
                    error && !username ? "shake border-red-500" : "border-white"
                  }`}
                />
              </div>
              <div className="w-full flex flex-col gap-[15px] items-start">
                <label
                  htmlFor=""
                  className="text-white font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]"
                >
                  password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`border-[1px] px-[20px] text-white font-sulphur w-full h-[50px] text-2xl focus:outline-none focus:drop-shadow-[0_0_10px_rgba(255,255,200,0.9)] ${
                    error && !password ? "shake border-red-500" : "border-white"
                  }`}
                />
              </div>
              {errorMassage && (
                <div className="text-red-500 font-sulphur leading-[2.5rem] text-center text-2xl tracking-[0.4rem]">
                  {errorMassage}
                </div>
              )}
              <button
                type="submit"
                className="border-[1px] border-white text-white font-sulphur text-center p-[15px] flex items-center justify-center cursor-pointer text-2xl tracking-[0.4rem]"
              >
                Login
              </button>
            </form>
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default Login;
