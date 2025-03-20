import { useEffect, useState } from "react";
import { socket } from "../../socket";
import not from "../assets/notification.mp3";
import { Howl } from "howler";

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
      <div className="fixed nt-ltr bottom-[10%] right-[10%] p-[30px] rounded-3xl bg-red-500 text-white shadow-lg transition-opacity duration-300">
        <h1 onClick={handleClick} className="cursor-pointer">
          X
        </h1>
        {notification}
      </div>
    )
  );
};

export default Notification;
