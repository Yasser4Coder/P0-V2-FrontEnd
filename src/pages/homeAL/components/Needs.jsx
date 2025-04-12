import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCallMentor } from "../../../apis/Mentors/callMentor";
import useAuth from "../../../hooks/useAuth";

const CallMentor = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { auth } = useAuth();

  const status = "needs";

  useEffect(() => {
    if (auth?.user?.userId && auth?.team?.teamId) {
      setValue("userId", auth.user.userId);
      setValue("teamId", auth.team.teamId);
      setValue("status", status);
    }
  }, [auth, setValue]);

  const { mutate: callMentor } = useCallMentor();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    callMentor(data, {
      onSuccess: () => {
        console.log("Mentor request sent successfully");
      },
      onError: (error) => {
        console.error("Error calling mentor:", error);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="blur-backgroundGateCard border-2 p-[15px] h-[300px] border-white rounded-xl text-white"
    >
      <h1 className="w-full border-[1px] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)] border-white text-center py-[8px] text-xl font-sulphur tracking-[0.4rem]">
        Needs
      </h1>

      <div className="mt-[10px] w-full h-[80%] gap-[30px] px-[5px] flex flex-col justify-center">
        <h1 className="text-lg font-sulphur tracking-[0.4rem] drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]">
          Tell as anything you need like buying ....
        </h1>
        <input
          type="text"
          placeholder="type here ........."
          className="w-full border-[1px] border-white h-[45px] px-[10px] text-lg font-sulphur text-white"
          {...register("message", { required: true })}
        />
        {errors.challengeType && (
          <span className="text-red-400 text-sm font-mono">
            This field is required
          </span>
        )}

        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="cursor-pointer border-[1px] px-[18px] py-[7px] align-middle border-white hover:drop-shadow-[0_0_10px_rgba(255,255,200,0.8)]"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default CallMentor;
