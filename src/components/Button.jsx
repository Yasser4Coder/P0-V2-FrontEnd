import React from "react";

const Button = ({ children, click, type, border, text }) => {
  return (
    <button
      type={type}
      onClick={click}
      className={`border-[1px] ${border ? border : "border-white"} ${
        text ? text : "text-white"
      } font-sulphur text-center p-[15px] flex items-center justify-center cursor-pointer text-md sm:text-2xl tracking-[0.4rem]`}
    >
      {children}
    </button>
  );
};

export default Button;
