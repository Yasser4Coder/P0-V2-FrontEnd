const Frame = ({ children, extraEdit, width = "w-full" }) => {
  return (
    <div
      className={`blur-background ${width} ${extraEdit} mb-[30px] border-white border-2 rounded-[20px]`}
    >
      {children}
    </div>
  );
};

export default Frame;
