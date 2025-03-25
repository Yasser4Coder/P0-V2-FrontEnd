import React from "react";
import exclamation from "../assets/icons/exclamation.svg";

const WarningTitle = ({ title, icon = true, extraStyle = "" }) => {
  return (
    <div className="flex items-center gap-[10px] sm:gap-[20px] 2xl:w-[54%]">
      {icon && (
        <div
          className="
          border border-white 
          flex items-center justify-center 
          h-[70.85px] 
          w-[70.85px] 
          flex-shrink-0
        "
        >
          <img
            src={exclamation}
            alt="Warning Icon"
            className="w-10 h-10 object-contain"
          />
        </div>
      )}
      <div
        className={`
          border border-white 
          flex-grow 
          flex items-center justify-center 
          h-[70.85px]
          px-[15px]
          ${extraStyle}
        `}
      >
        <h1
          className="
          lg:text-4xl
          md:text-3xl
          sm:text-2xl
          text-md
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
  );
};

export default WarningTitle;
