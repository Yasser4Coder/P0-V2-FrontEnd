import API from "../axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { socket } from "../../../socket";
const fetchAnnouncements = async () => {
  try {
    const response = await API.get("/Announcements");
    localStorage.setItem("announcementCount", response.data.length);
    socket.off("announcement");
    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error; // حتى يتمكن React Query من التعامل مع الخطأ
  }
};

export const useAnnouncements = () => {
  return useQuery({
    queryKey: ["Announcements"],
    queryFn: fetchAnnouncements,
  });
};
