const Frame = ({ children }) => {
  return (
    <div className="blur-background border-white border-2 p-[20px] rounded-[20px]">
      {children}
    </div>
  );
};

export default Frame;
