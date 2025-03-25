import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axiosInstance";
import toast from "react-hot-toast";

const useAddTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      
        const response = await API.post("/teams", data);
        return response.data;
      
        
    },

    onSuccess: () => {
      toast.success(" تم إضافة الفريق بنجاح!");
      queryClient.invalidateQueries(["Teams"]);   
    },

    onError: (error) => {
      console.error("❌ خطأ أثناء الإرسال:", error);
      const errorMessage =
        error.response?.data?.message || "حدث خطأ غير متوقع!";
      toast.error(`⚠️ ${errorMessage}`);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["Teams"]);
    },
  });
};

export default useAddTeam;
