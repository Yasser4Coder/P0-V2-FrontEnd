import API from "../axiosInstance";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const callMentor = async (payload) => {
  const response = await API.post("/mentors", payload);
  if (response.status !== 201) {
    throw new Error("Failed to call mentor");
  }
  return response.data;
};

export const useCallMentor = () => {
  return useMutation({
    mutationFn: callMentor,
    onSuccess: () => {
      toast.success("request sent successfully please wait!");
    },
    onError: (error) => {
      console.error("Error calling mentor:", error);
      toast.error("Failed to send mentor request");
    },
  });
};

export default callMentor;
