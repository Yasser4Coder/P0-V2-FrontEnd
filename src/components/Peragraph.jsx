import React from "react";

const Peragraph = ({ children, error, correct }) => {
  return (
    <p
      className={`${
        error === true
          ? "text-red-500"
          : correct === true
          ? "text-green-500"
          : "text-white"
      } font-sulphur leading-[2.5rem] text-center text-md sm:text-2xl tracking-[0.4rem]`}
    >
      {children}
    </p>
  );
};

export default Peragraph;
