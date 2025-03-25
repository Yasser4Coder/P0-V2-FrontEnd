import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axiosInstance";
import toast from "react-hot-toast";

const useEditeTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      
        const response = await API.patch(`/teams/${data._id}`,data);
        return response.data;
      
        
    },

    onSuccess: () => {
      toast.success(" تم تعديل الفريق بنجاح!");
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

export default useEditeTeam;
