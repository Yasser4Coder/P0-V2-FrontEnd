import React from "react";
import exclamation from "../assets/icons/exclamation.svg";

const WarningTitle = ({
  title,
  icon = true,
  extraStyle = "",
  bigTitleSize = "lg:text-4xl md:text-3xl sm:text-2xl text-md",
  hieght = "h-[70.85px]",
  iconWidth = "w-[70.85px]",
}) => {
  return (
    <div className="flex items-center gap-[10px] sm:gap-[20px] 2xl:w-[54%]">
      {icon && (
        <div
          className={`
          border border-white 
          flex items-center justify-center 
          ${hieght}
          ${iconWidth}
          flex-shrink-0
          `}
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
          ${hieght}
          px-[15px]
          ${extraStyle}
        `}
      >
        {/* lg:text-4xl md:text-3xl sm:text-2xl text-md */}
        <h1
          className={`
          ${bigTitleSize}
          font-bold 
          text-white 
          text-center 
          tracking-[0.4rem] 
          drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]
          font-sulphur
        `}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default WarningTitle;
