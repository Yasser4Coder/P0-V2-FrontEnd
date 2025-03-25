import API from "../axiosInstance";
import { useQuery } from "@tanstack/react-query";
const fetchUsers = async () => {
    try {
      const response = await API.get("/users");
      console.log("Response Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

export const useUsers = ()=>{
   return useQuery({
    queryKey:["users"],
    queryFn: fetchUsers,
   })
}