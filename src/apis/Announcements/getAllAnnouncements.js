import API from "../axiosInstance";
import { useQuery } from "@tanstack/react-query";
const fetchAnnouncements = async () => {
    try {
      const response = await API.get("/Announcements");
      console.log("Response Data Announcements:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching teams:", error);
      throw error; // حتى يتمكن React Query من التعامل مع الخطأ
    }
  };

export const useAnnouncements = ()=>{
   return useQuery({
    queryKey:["Announcements"],
    queryFn: fetchAnnouncements,
   })
}