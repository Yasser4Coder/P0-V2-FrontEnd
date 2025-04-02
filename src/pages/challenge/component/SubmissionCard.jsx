"use client";

import { useForm } from "react-hook-form";
import Frame from "../../../components/Frame";
import Peragraph from "../../../components/Peragraph";
import WarningTitle from "../../../components/WorningTitle";

const SubmissionCard = () => {
  const { register, handleSubmit, watch } = useForm();
  const submissionFile = watch("file");
  const fileName =
    submissionFile && submissionFile.length > 0 ? submissionFile[0].name : "";

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can handle form submission here, e.g., sending data to an API.
  };

  return (
    <Frame
      width="w-[90%]"
      extraEdit="flex mx-auto flex-col duration-2000 py-[30px] ease-out transition-all gap-[25px] px-[40px] items-center justify-center"
    >
      <WarningTitle
        bigTitleSize="lg:text-2xl md:text-xl sm:text-lg text-md"
        hieght="h-[50.85px]"
        iconWidth="w-[50.85px]"
        icon={false}
        title={"CHALLENGE NAME LIKE A PROPS"}
      />

      <div className="w-full">
        <Peragraph className="text-start text-xl font-medium text-white">
          Challenge Script:
        </Peragraph>
        <div className="space-y-4 text-base text-white">
          <Peragraph
            tracking="tracking-[0.12rem]"
            leading="leading-[2.2rem]"
            text="text-md sm:text-xl"
          >
            Jin-Woo stood outside the hospital, his heart pounding. His mother
            lay inside, trapped in a coma, and the doctors refused to help
            without an outrageous payment. He clenched his fists—he wouldn't let
            the system decide her fate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ad voluptatum ipsa eos placeat officia! Ex quo,
            reiciendis ut id nostrum atque voluptatibus animi consequuntur
            officiis quod architecto minima dolorum aut?
          </Peragraph>
        </div>
      </div>

      <div className="w-full flex flex-col items-start">
        <Peragraph className="text-xl font-medium text-white">
          Attached:
        </Peragraph>
        <label
          htmlFor="fileInput"
          className="border border-[#03BFD9] text-white px-4 py-2 mt-2 text-xl cursor-pointer"
        >
          {fileName || "File"}
        </label>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          {...register("file")}
        />
      </div>

      <div className="w-full flex flex-col items-start">
        <Peragraph className="text-xl font-medium text-white">
          Sbmission:
        </Peragraph>
        <div className="flex items-center mt-2 w-1/2">
          <input
            type="text"
            className="border border-[#03BFD9] text-white px-4 py-2 mt-2 text-xl w-full"
            placeholder="SUBMIT A TEXT IF IT NEEDED"
            {...register("submissionUrl")}
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit(onSubmit)}
          className="border border-white px-8 py-3 lg:text-2xl md:text-xl sm:text-lg text-md font-bold text-white text-center tracking-[0.4rem] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)] font-sulphur cursor-pointer"
        >
          SUBMIT
        </button>
      </div>
    </Frame>
  );
};

export default SubmissionCard;
