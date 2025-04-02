import React from "react";

const Needs = () => {
  return (
    <div className="blur-backgroundGateCard border-2 p-[15px] h-[300px] border-white rounded-xl text-white">
      <h1 className="w-full border-[1px] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)] border-white text-center py-[8px] text-xl font-sulphur tracking-[0.4rem]">
        needs
      </h1>
      <div className="mt-[10px] w-full h-[80%] gap-[30px] px-[5px] flex flex-col justify-center">
        <h1 className="text-lg font-sulphur tracking-[0.4rem] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]">
          tell us what you <br /> need !!
        </h1>
        <input
          type="text"
          placeholder="type here ........."
          className="w-full border-[1px] border-white h-[45px] px-[10px] text-lg font-sulphur text-white"
        />
        <div className="w-full flex items-center justify-center">
          <button className=" cursor-pointer border-[1px] px-[18px] py-[7px] align-middle border-white hover:drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Needs;
