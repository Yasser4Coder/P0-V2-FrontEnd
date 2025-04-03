import API from "../axiosInstance";
import { useQuery } from "@tanstack/react-query";
const fetchChallenges = async () => {
    try {
      const response = await API.get("/challenges");
      console.log("Response Data challenge:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching teams:", error);
      throw error; // حتى يتمكن React Query من التعامل مع الخطأ
    }
  };

export const useChallenges = ()=>{
   return useQuery({
    queryKey:["challenges"],
    queryFn: fetchChallenges,
   })
}