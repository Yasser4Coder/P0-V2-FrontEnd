import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../../apis/axiosInstance";
import Frame from "../../../components/Frame";
import Peragraph from "../../../components/Peragraph";
import WarningTitle from "../../../components/WorningTitle";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const fetchChallengeById = async (id) => {
  const { data } = await API.get(`/challenges/${id}`);
  return data;
};

const submitChallenge = async ({ id, formData, team }) => {
  const submission = new FormData();

  if (formData.submissionFile && formData.submissionFile.length > 0) {
    submission.append("submissionFile", formData.submissionFile[0]);
  }

  if (formData.submissionText) {
    submission.append("submissionText", formData.submissionText);
  }

  submission.append("challengeId", id);
  submission.append("teamId", team.teamId);


  try {
    const { data } = await API.post(`/submissions`, submission, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error) {
    console.error("Server response:", error.response?.data);
    const errorMessage = error.response?.data?.message || error.message;
    throw new Error(errorMessage);
  }
};

const SubmissionCard = ({
  name = "Test Name",
  description = "Test Description",
}) => {
  const { id } = useParams();
  const { register, handleSubmit, watch, reset } = useForm();
  const [fileError, setFileError] = useState("");

  // Query for fetching challenge data
  const {
    data: challenge,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["challenge", id],
    queryFn: () => fetchChallengeById(id),
    enabled: !!id,
  });

  const { auth } = useAuth();
  const team = auth.team;

  // Mutation for submitting challenge response
  const {
    mutate,
    isPending,
    isError,
    isSuccess,
    error: submissionError,
  } = useMutation({
    mutationFn: (formData) => submitChallenge({ id, formData, team }),
    onSuccess: (data) => {
      console.log("Submission successful:", data);
      reset();
      setFileError("");
    },
    onError: (error) => {
      console.error("Submission failed:", error);
    },
  });

  const submissionFile = watch("submissionFile");
  const fileName =
    submissionFile && submissionFile.length > 0 ? submissionFile[0].name : "";

  const validateFile = (file) => {
    // Add file validation if needed
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file && file.size > maxSize) {
      return "File size exceeds 10MB limit";
    }
    return null;
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const errorMsg = validateFile(files[0]);
      if (errorMsg) {
        setFileError(errorMsg);
      } else {
        setFileError("");
        console.log("File selected:", files[0].name);
      }
    }
  };

  const onSubmit = (data) => {
    if (data.submissionFile && data.submissionFile.length > 0) {
      const errorMsg = validateFile(data.submissionFile[0]);
      if (errorMsg) {
        setFileError(errorMsg);
        return;
      }
    }

    console.log("Form Data:", data);
    mutate(data);
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

      {/* Status messages */}
      {isSuccess && (
        <div className="w-full bg-green-500 text-white p-4 rounded">
          Submission successful!
        </div>
      )}
      {isError && (
        <div className="w-full bg-red-500 text-white p-4 rounded">
          Error: {submissionError?.message || "Failed to submit challenge"}
        </div>
      )}

      {/* وصف التحدي */}
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
              link.setAttribute(
                "download",
                challenge.attachmentFile.split("/").pop() || "file"
              );
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
        <Peragraph className="text-xl font-medium text-white">
          Attached:
        </Peragraph>
        <label
          htmlFor="fileInput"
          className="border border-[#03BFD9] text-white px-4 py-2 mt-2 text-xl cursor-pointer flex items-center"
        >
          <span className="truncate max-w-xs">{fileName || "Upload File"}</span>
        </label>
        {/* Updated file input: register the onChange handler via react-hook-form */}
        <input
          id="fileInput"
          type="file"
          className="hidden"
          {...register("submissionFile", {
            onChange: handleFileChange,
          })}
        />
        {fileName && !fileError && (
          <p className="text-green-400 mt-2">File selected: {fileName}</p>
        )}
        {fileError && <p className="text-red-500 mt-2">{fileError}</p>}
      </div>

      {/* إدخال نص التقديم */}
      <div className="w-full flex flex-col items-start">
        <Peragraph className="text-xl font-medium text-white">
          Submission:
        </Peragraph>
        <div className="flex items-center mt-2 w-1/2">
          <input
            type="text"
            className="border border-[#03BFD9] text-white px-4 py-2 mt-2 text-xl w-full"
            placeholder="SUBMIT A TEXT IF IT NEEDED"
            {...register("submissionText")}
          />
        </div>
      </div>

      {/* زر الإرسال */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit(onSubmit)}
          disabled={isPending || fileError}
          className={`border border-white px-8 py-3 lg:text-2xl md:text-xl sm:text-lg text-md font-bold text-white tracking-[0.4rem] ${
            isPending || fileError
              ? "opacity-50 cursor-not-allowed"
              : "drop-shadow-[0_0_10px_rgba(255,255,200,0.8)] cursor-pointer"
          } font-sulphur`}
        >
          {isPending ? "SUBMITTING..." : "SUBMIT"}
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
