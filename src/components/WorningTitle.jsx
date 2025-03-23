import exclamation from "../assets/icons/exclamation.svg";

const WorningTitle = ({ title, icon, extraStyle }) => {
  return (
    <div className="flex items-center gap-[20px]">
      {icon && (
        <div className="border-[1px] border-white p-[5px]">
          <img src={exclamation} alt="" width={60} />
        </div>
      )}
      <div
        className={`border-[1px] ${extraStyle} font-sulphur tracking-[0.4rem] text-white flex items-center justify-center px-[15px] border-white h-[70.85px]`}
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default WorningTitle;
