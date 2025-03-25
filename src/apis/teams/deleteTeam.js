import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axiosInstance";
import toast from "react-hot-toast";

const useDeleteTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
     
        const response = await API.delete(`/teams/${id}`);
        return response.data;
      
    },

    onSuccess: () => {
      toast.success("تم حذف الفريق بنجاح!");
      queryClient.invalidateQueries(["Teams"]);  
    },

    onError: (error) => {
      console.error("❌ خطأ أثناء الحذف:", error);
      const errorMessage =
        error.response?.data?.message || "حدث خطأ غير متوقع أثناء الحذف!";
      toast.error(`⚠️ ${errorMessage}`);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["Teams"]);
    },
  });
};

export default useDeleteTeam;
