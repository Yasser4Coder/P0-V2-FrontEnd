import { useEffect, useState } from "react";
import { socket } from "../../socket";
import not from "../assets/audios/notification.mp3";
import { Howl } from "howler";
import img from "../assets/images/003.png";
import { IoCloseCircle } from "react-icons/io5";

const Notification = () => {
  const [notification, setNotification] = useState(() => {
    return localStorage.getItem("notification") || "";
  });

  const handleClick = () => {
    setNotification("");
    localStorage.removeItem("notification");
  };

  const sound = new Howl({
    src: [not],
    volume: 1.0,
  });

  useEffect(() => {
    socket.on("notification", (message) => {
      setNotification(message);
      localStorage.setItem("notification", message); // Save in localStorage
    });

    return () => {
      socket.off("notification");
    };
  }, []);

  useEffect(() => {
    if (notification !== "") {
      sound.play();
    }
  }, [notification, sound]);

  return (
    notification && (
      <div className="fixed z-50 nt-ltr bottom-[10%] right-[5%] shadow-lg transition-opacity duration-300">
        <div className="relative min-w-[300px] min-h-[80px]">
          <img
            src={img}
            alt=""
            className=" absolute min-full min-h-full w-full h-full"
          />
          <div
            onClick={handleClick}
            className="absolute right-[1%] top-[10%] text-3xl text-[#00B2FF] cursor-pointer"
          >
            <IoCloseCircle />
          </div>
          <div className="  w-full bg-[#6F6E6E] rounded-tl-2xl text-white h-full top-0 px-[20px] max-w-[400px] py-[30px]">
            {notification}
          </div>
        </div>
      </div>
    )
  );
};

export default Notification;
