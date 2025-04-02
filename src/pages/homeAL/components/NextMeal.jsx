import React from "react";

const NextMeal = () => {
  return (
    <div className="blur-backgroundGateCard border-2 p-[15px] h-[300px] border-white rounded-xl text-white">
      <h1 className="w-full border-[1px] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)] border-white text-center py-[8px] text-xl font-sulphur tracking-[0.4rem]">
        next meal
      </h1>
      <div className="mt-[10px] w-full h-[80%] px-[5px] flex flex-col justify-center">
        <h1 className="text-lg font-sulphur tracking-[0.4rem] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]">
          meal : dinner
        </h1>
        <h1 className="text-lg font-sulphur tracking-[0.4rem] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]">
          time : 19:00
        </h1>
      </div>
    </div>
  );
};

export default NextMeal;
