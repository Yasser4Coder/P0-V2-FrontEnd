import Frame from "../../../components/Frame";
import Peragraph from "../../../components/Peragraph";
import WarningTitle from "../../../components/WorningTitle";

const AnnouncementComp = () => {
  return (
    <>
      <Frame
        width="w-[90%]"
        extraEdit={`flex mx-auto flex-col duration-2000 py-[30px] ease-out transition-all  gap-[25px] px-[40px] items-center justify-center`}
      >
        <WarningTitle
          bigTitleSize="lg:text-2xl md:text-xl sm:text-lg text-md"
          hieght="h-[50.85px]"
          iconWidth="w-[50.85px]"
          icon={true}
          title={"ANNOUNCEMENT"}
        />
        <Peragraph
          tracking={"tracking-[0.12rem]"}
          leading={"leading-[2.2rem]"}
          text="text-md sm:text-xl"
        >
          Attension please
        </Peragraph>
        <Peragraph
          tracking={"tracking-[0.12rem]"}
          leading={"leading-[2.2rem]"}
          extraStyle={"max-w-[80%]"}
          text="text-md sm:text-xl"
        >
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
