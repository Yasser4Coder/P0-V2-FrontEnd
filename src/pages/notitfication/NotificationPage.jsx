import React, { useState } from "react";
import fixBg from "../../assets/bgs/Welcome Page.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Frame from "../../components/Frame";
import WorningTitle from "../../components/WorningTitle";
import Button from "../../components/Button";
import Peragraph from "../../components/Peragraph";
import { useNavigate } from "react-router-dom";

const NotificationPage = () => {
  const navigate = useNavigate();
  const [disapair, setDisapair] = useState(false);

  const handleClick = () => {
    setDisapair(true);
    setTimeout(() => {
      navigate("/gates");
    }, 800);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full mt-[60px]">
      <img
        src={fixBg}
        alt=""
        className="z-0 fixed w-full h-full bg-center bg-cover top-0 left-0 object-cover"
      />
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }} // Start position
        animate={{ opacity: 1, y: 0 }} // End position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      >
        <Frame
          extraEdit={`flex flex-col ${
            disapair === true ? "-translate-x-[200%]" : ""
          } duration-2000 ease-out transition-all py-[60px] gap-[40px] px-[15px] items-center justify-center`}
        >
          <WorningTitle icon={true} title={"NOTIFICATION"} />
          <Peragraph>
            You're in the system now. <br /> Are you ready to move forward?
          </Peragraph>
          <div className="flex items-center gap-[40px]">
            <Button
              click={() => navigate("/welcome")}
              border="border-red-500"
              text="text-red-500"
            >
              No
            </Button>
            <Button
              click={handleClick}
              border="border-green-500"
              text="text-green-500"
            >
              Yes
            </Button>
          </div>
        </Frame>
      </motion.div>
    </div>
  );
};

export default NotificationPage;
