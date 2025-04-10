const Frame = ({ children, extraEdit, width = "w-full" }) => {
  return (
    <div
      className={`blur-background relative ${width} border-2 border-white ${extraEdit} mb-[30px] rounded-[20px]`}
    >
      {children}
    </div>
  );
};

export default Frame;
