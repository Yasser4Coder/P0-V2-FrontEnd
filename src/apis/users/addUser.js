import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axiosInstance";
import toast from "react-hot-toast";

const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      
        const response = await API.post("/users", data);
        return response.data;
      
        
    },

    onSuccess: () => {
      toast.success(" تم إضافة المستخدم بنجاح!");
      queryClient.invalidateQueries(["users"]);   
    },

    onError: (error) => {
      console.error("❌ خطأ أثناء الإرسال:", error);
      const errorMessage =
        error.response?.data?.message || "حدث خطأ غير متوقع!";
      toast.error(`⚠️ ${errorMessage}`);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};

export default useAddUser;
