import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import WorningTitle from "../../components/WorningTitle";
import BackGround from "./components/BackGround";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Peragraph from "../../components/Peragraph";
const Home = () => {
  const [showFrame, setShowFrame] = useState(false);
  const [character, setCharacter] = useState(false);
  const [disapair, setDisapair] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFrame(true);
      setCharacter("right");
    }, 1500); // Show after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setDisapair(true);
    setTimeout(() => {
      navigate("/login");
    }, 800);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[60px]">
      <BackGround character={character} />
      {showFrame && (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, y: 50 }} // Start position
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
        >
          <Frame
            extraEdit={`flex flex-col duration-2000 ease-out transition-all py-[80px] gap-[50px] px-[15px] ${
              disapair === true ? "-translate-x-[200%]" : ""
            } items-center justify-center`}
          >
            <WorningTitle icon={true} title={"Are you brave enough!!"} />
            <Peragraph>
              you had a second awaking from now <br /> you can level up your
              strength <br /> intelligence, but !! <br /> are you brave enough
              to do it ?
            </Peragraph>
            <Button click={handleClick}>Yes i’m</Button>
          </Frame>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
