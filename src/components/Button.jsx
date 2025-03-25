import React from "react";

const Button = ({ children, click, type }) => {
  return (
    <button
      type={type}
      onClick={click}
      className="border-[1px] border-white text-white font-sulphur text-center p-[15px] flex items-center justify-center cursor-pointer text-md sm:text-2xl tracking-[0.4rem]"
    >
      {children}
    </button>
  );
};

export default Button;
