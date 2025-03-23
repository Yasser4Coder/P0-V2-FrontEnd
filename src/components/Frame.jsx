const Frame = ({ children, extraEdit }) => {
  return (
    <div
      className={`blur-background ${extraEdit} border-white border-2 rounded-[20px]`}
    >
      {children}
    </div>
  );
};

export default Frame;
