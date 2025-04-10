import React, { useState, useEffect } from "react";
import exclamation from "../../../assets/icons/exclamation.svg";
import RedKnight from "../../../assets/images/boss.webp";
import { useNavigate } from "react-router-dom";

const GateCard = ({ title, desc, open, gateNumber, date }) => {
  const navigate = useNavigate();

  const targetDate = new Date(date).getTime();
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTime({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTime({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-[320px] w-full relative overflow-hidden">
      <div className=" absolute rounded-3xl overflow-hidden w-full h-full">
        <img src={RedKnight} alt="" className="rounded-3xl object-center" />
      </div>
      {open === true ? (
        <div className="blur-backgroundGateCard mb-[30px] border-white border-2 rounded-[20px] p-[25px] flex flex-col items-center h-full">
          <div className="flex items-center gap-[10px] sm:gap-[20px] w-full">
            <div
              className="
              border border-white 
              flex items-center justify-center 
              h-[40.85px] 
              w-[40.85px] 
              flex-shrink-0
              p-[4px]
            "
            >
              <img
                src={exclamation}
                alt="Warning Icon"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div
              className="
              border border-white 
              flex-grow 
              flex items-center justify-center 
              h-[40.85px]
              px-[15px]
              w-full
            "
            >
              <h1
                className="
              lg:text-xl
              md:text-lg
              sm:text-md
              text-xs
              font-bold 
              text-white 
              text-center 
              tracking-[0.4rem] 
              drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]
              font-sulphur
            "
              >
                {title}
              </h1>
            </div>
          </div>
          <p className="text-white text-center mt-[25px] text-lg">{desc}</p>
          <button
            onClick={() => navigate(`/gate/${gateNumber}`)} // التنقل حسب رقم البوابة
            className={`border-[1px] mt-[25px] text-white border-white font-sulphur text-center p-[15px] flex items-center justify-center cursor-pointer lg:text-xl
              md:text-lg
              sm:text-md
              text-xs tracking-[0.4rem]`}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="blur-backgroundGateCard mb-[30px] border-white border-2 rounded-[20px] p-[25px] flex flex-col items-center h-full">
          <div className="flex items-center gap-[10px] sm:gap-[20px] w-full">
            <div
              className="
              border border-white 
              flex items-center justify-center 
              h-[40.85px] 
              w-[40.85px] 
              flex-shrink-0
              p-[4px]
            "
            >
              <img
                src={exclamation}
                alt="Warning Icon"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div
              className="
              border border-white 
              flex-grow 
              flex items-center justify-center 
              h-[40.85px]
              px-[15px]
              w-full
            "
            >
              <h1
                className="
              lg:text-xl
              md:text-lg
              sm:text-md
              text-xs
              font-bold 
              text-white 
              text-center 
              tracking-[0.4rem] 
              drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]
              font-sulphur
            "
              >
                {title}
              </h1>
            </div>
          </div>
          <div
            className="
              lg:text-6xl
              md:text-4xl
              sm:text-2xl
              text-xl
              font-bold 
              text-white 
              text-center 
              tracking-[0.4rem] 
              drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]
              font-sulphur
              mt-[60px]
            "
          >
            {time.hours}:{time.minutes}:{time.seconds}
          </div>
        </div>
      )}
    </div>
  );
};

export default GateCard;
