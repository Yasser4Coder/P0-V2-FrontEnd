import React from "react";

const Peragraph = ({
  children,
  error,
  correct,
  text = "text-md sm:text-2xl",
  extraStyle,
  tracking = "leading-[2.5rem]",
  leading = "tracking-[0.4rem]",
}) => {
  return (
    <p
      className={`${
        error === true
          ? "text-red-500"
          : correct === true
          ? "text-green-500"
          : "text-white"
      } font-sulphur ${tracking} ${leading}  ${extraStyle} text-center ${text}`}
    >
      {children}
    </p>
  );
};

export default Peragraph;
