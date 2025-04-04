import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../../apis/axiosInstance";
import Frame from "../../../components/Frame";
import Peragraph from "../../../components/Peragraph";
import WarningTitle from "../../../components/WorningTitle";

const fetchChallengeById = async (id) => {
  const { data } = await API.get(`/challenges/${id}`);
  return data;
};

const SubmissionCard = ({ name = "Test Name", description = "Test Description" }) => {
  const { id } = useParams();
  const { data: challenge, isLoading, error } = useQuery({
    queryKey: ["challenge", id],
    queryFn: () => fetchChallengeById(id),
    enabled: !!id,
  });

  const { register, handleSubmit, watch } = useForm();
  const submissionFile = watch("file");
  const fileName =
    submissionFile && submissionFile.length > 0 ? submissionFile[0].name : "";

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <Frame
      width="w-[90%]"
      extraEdit="flex mx-auto flex-col py-[30px] gap-[25px] px-[40px] items-center justify-center"
    >
      <WarningTitle
        bigTitleSize="lg:text-2xl md:text-xl sm:text-lg text-md"
        hieght="h-[50.85px]"
        iconWidth="w-[50.85px]"
        icon={false}
        title={challenge.title || name}
      />

      {/* وصف التحدي */}
      <div className="w-full">
        <Peragraph className="text-start text-xl font-medium text-white">
          Challenge Script:
        </Peragraph>
        <div className="space-y-4 text-base text-white">
          <Peragraph tracking="tracking-[0.12rem]" leading="leading-[2.2rem]" text="text-md sm:text-xl">
            {challenge.description || description}
          </Peragraph>
        </div>
      </div>

      {/* زر تحميل الملف المطلوب */}
      <div className="w-full flex flex-col items-start">
        <Peragraph className="text-xl font-medium text-white">
          Requirement File:
        </Peragraph>
        {challenge.attachmentFile ? (
          <a
            href={challenge.attachmentFile}
            className="border border-[#03BFD9] text-white px-4 py-2 mt-2 text-xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const link = document.createElement("a");
              link.href = challenge.attachmentFile;
              link.setAttribute("download", challenge.attachmentFile.split("/").pop() || "file");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download File
          </a>
        ) : (
          <div className="text-red-500">No file available</div>
        )}
      </div>

      {/* خط فاصل */}
      <div className="w-full p-[1px] bg-white"></div>

      {/* رفع الملف */}
      <div className="w-full flex flex-col items-start">
        <Peragraph className="text-xl font-medium text-white">Attached:</Peragraph>
        <label
          htmlFor="fileInput"
          className="border border-[#03BFD9] text-white px-4 py-2 mt-2 text-xl cursor-pointer"
        >
          {fileName || "Upload File"}
        </label>
        <input id="fileInput" type="file" className="hidden" {...register("file")} />
      </div>

      {/* إدخال نص التقديم */}
      <div className="w-full flex flex-col items-start">
        <Peragraph className="text-xl font-medium text-white">Submission:</Peragraph>
        <div className="flex items-center mt-2 w-1/2">
          <input
            type="text"
            className="border border-[#03BFD9] text-white px-4 py-2 mt-2 text-xl w-full"
            placeholder="SUBMIT A TEXT IF IT NEEDED"
            {...register("submissionUrl")}
          />
        </div>
      </div>

      {/* زر الإرسال */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit(onSubmit)}
          className="border border-white px-8 py-3 lg:text-2xl md:text-xl sm:text-lg text-md font-bold text-white tracking-[0.4rem] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)] font-sulphur cursor-pointer"
        >
          SUBMIT
        </button>
      </div>
    </Frame>
  );
};

SubmissionCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default SubmissionCard;
