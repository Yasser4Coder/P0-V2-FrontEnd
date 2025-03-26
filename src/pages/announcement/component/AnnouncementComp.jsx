import Frame from "../../../components/Frame";
import Peragraph from "../../../components/Peragraph";
import WarningTitle from "../../../components/WorningTitle";

const AnnouncementComp = () => {
  return (
    <>
      <Frame
        extraEdit={`flex flex-col duration-2000 ease-out transition-all py-[60px] gap-[40px] px-[15px] items-center justify-center`}
      >
        <WarningTitle icon={true} title={"ANNOUNCEMENT"} />
        <Peragraph>Attension please</Peragraph>
        <Peragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in arcu
          non nunc lobortis convallis. Donec vel odio vel tellus convallis
          fermentum. Donec vel nisi sed ipsum convallis convallis. Donec vel
          nisi sed ipsum convallis convallis.
        </Peragraph>
      </Frame>
    </>
  );
};

export default AnnouncementComp;
