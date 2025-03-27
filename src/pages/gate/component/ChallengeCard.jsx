import React from "react";

const ChallengeCard = ({
  divNum,
  challengeName,
  categorie,
  points,
  difficulty,
  solved,
  index,
}) => {
  return (
    <div
      className={`div${divNum} ${
        solved === true
          ? "blur-backgroundGateCard-green border-[#9aff91] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]"
          : "blur-backgroundGateCard border-white"
      } font-sulphur relative rounded-2xl flex flex-col items-center justify-between py-[13px] px-[15px] border-2`}
    >
      {index === 1 && (
        <div
          className={` absolute w-[3px] h-[124%] ${
            solved === true ? "bg-[#9aff91]" : "bg-white"
          } z-20 bottom-[-124%]`}
        ></div>
      )}

      {index === 2 && (
        <div className=" absolute w-[174%] h-[83%] z-20 right-[44%] bottom-[-83%]">
          <div
            className={`${
              solved === true ? "bg-[#9aff91]" : "bg-white"
            } h-[30%] w-[3px] float-right`}
          ></div>
          <div
            className={`${
              solved === true ? "bg-[#9aff91]" : "bg-white"
            } h-[3px] w-full float-right`}
          ></div>
          <div
            className={`${
              solved === true ? "bg-[#9aff91]" : "bg-white"
            } h-[68%] float-left w-[3px]`}
          ></div>
        </div>
      )}
      {index === 3 && (
        <div
          className={` absolute h-[3px] w-[61%] ${
            solved === true ? "bg-[#9aff91]" : "bg-white"
          } z-20 bottom-[30%] left-[-61%]`}
        ></div>
      )}
      {index === 4 && (
        <div className=" absolute w-[174%] h-[83%] z-20 left-[44%] bottom-[-83%]">
          <div
            className={`${
              solved === true ? "bg-[#9aff91]" : "bg-white"
            } h-[30%] w-[3px]`}
          ></div>
          <div
            className={`${
              solved === true ? "bg-[#9aff91]" : "bg-white"
            } h-[3px] w-full`}
          ></div>
          <div
            className={`${
              solved === true ? "bg-[#9aff91]" : "bg-white"
            } h-[68%] float-right w-[3px]`}
          ></div>
        </div>
      )}
      {index === 5 && (
        <div
          className={` absolute h-[3px] w-[61%] ${
            solved === true ? "bg-[#9aff91]" : "bg-white"
          } z-20 bottom-[30%] right-[-61%]`}
        ></div>
      )}

      <h1 className="border-[1px] border-white py-[5px] text-lg text-white px-[10px]">
        {challengeName}
      </h1>
      <div className="w-full tracking-[0.1rem] text-white">
        <p>categorie: {categorie}</p>
        <p>points : {points}</p>
        <p>difficulty : {difficulty}</p>
      </div>
      {solved === true ? (
        <div className="border-[1px] cursor-cell text-white border-white py-[5px] px-[10px]">
          Solved
        </div>
      ) : (
        <button className="border-[1px] cursor-pointer text-white border-white py-[5px] px-[10px]">
          Next
        </button>
      )}
    </div>
  );
};

export default ChallengeCard;
