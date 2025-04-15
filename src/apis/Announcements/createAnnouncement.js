import API from "../axiosInstance";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const createAnnouncement = async (payload) => {
  const response = await API.post("/announcements", payload);
  if (response.status !== 201) {
    throw new Error("Failed to create announcement");
  }
  return response.data;
};

export const useCreateAnnouncement = () => {
  return useMutation({
    mutationFn: createAnnouncement,
    onSuccess: () => {
      toast.success("Announcement created successfully!");
    },
    onError: (error) => {
      console.error("Error creating announcement:", error);
      toast.error("Failed to create announcement");
    },
  });
};

export default createAnnouncement;
