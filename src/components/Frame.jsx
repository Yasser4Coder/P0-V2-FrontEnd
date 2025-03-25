const Frame = ({ children, extraEdit }) => {
  return (
    <div
      className={`blur-background ${extraEdit} mb-[30px] border-white border-2 rounded-[20px]`}
    >
      {children}
    </div>
  );
};

export default Frame;
