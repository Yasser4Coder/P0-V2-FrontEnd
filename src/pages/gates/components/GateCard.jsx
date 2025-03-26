import React from "react";
import exclamation from "../../../assets/icons/exclamation.svg";
import RedKnight from "../../../assets/images/RedKnight.jpg";

const GateCard = ({ title, desc, open }) => {
  return (
    <div className="min-h-[320px] w-full relative">
      <img
        src={RedKnight}
        alt=""
        className="w-full h-full rounded-3xl absolute bg-cover"
      />
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
              className={`
              border border-white 
              flex-grow 
              flex items-center justify-center 
              h-[40.85px]
              px-[15px]
              w-full
            `}
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
              className={`
              border border-white 
              flex-grow 
              flex items-center justify-center 
              h-[40.85px]
              px-[15px]
              w-full
            `}
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
            36:00:00
          </div>
        </div>
      )}
    </div>
  );
};

export default GateCard;
