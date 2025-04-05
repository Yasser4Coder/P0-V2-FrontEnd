import API from "../axiosInstance";
import { useQuery } from "@tanstack/react-query";
const fetchTeams = async () => {
  try {
    const response = await API.get("/teams");
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error; // حتى يتمكن React Query من التعامل مع الخطأ
  }
};

export const useTeams = () => {
  return useQuery({
    queryKey: ["Teams"],
    queryFn: fetchTeams,
  });
};
