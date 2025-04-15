import API from "../axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

// POST: Call a mentor
const callMentor = async (payload) => {
  const response = await API.post("/mentors", payload);
  if (response.status !== 201) {
    throw new Error("Failed to call mentor");
  }
  return response.data;
};

// GET: Fetch mentors
const getMentors = async () => {
  const response = await API.get("mentors/mentors");
  if (response.status !== 200) {
    throw new Error("Failed to fetch mentors");
  }
  return response.data;
};
// GET: Fetch mentors
const getNeeds = async () => {
  const response = await API.get("mentors/needs");
  if (response.status !== 200) {
    throw new Error("Failed to fetch needs");
  }
  return response.data;
};

// Hook: Use callMentor
export const useCallMentor = () => {
  return useMutation({
    mutationFn: callMentor,
    onSuccess: () => {
      toast.success("Request sent successfully, please wait!");
    },
    onError: (error) => {
      console.error("Error calling mentor:", error);
      toast.error("Failed to send mentor request");
    },
  });
};

// Hook: Use getMentors
export const useGetMentors = () => {
  return useQuery({
    queryKey: ["mentors"],
    queryFn: getMentors,
    onError: (error) => {
      console.error("Error fetching mentors:", error);
      toast.error("Failed to load mentors");
    },
  });
};
// Hook: Use getNeeds
export const useGetNeeds = () => {
  return useQuery({
    queryKey: ["needs"],
    queryFn: getNeeds,
    onError: (error) => {
      console.error("Error fetching needs:", error);
      toast.error("Failed to load needs");
    },
  });
};

export default callMentor;
