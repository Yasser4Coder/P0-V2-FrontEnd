import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axiosInstance";
import toast from "react-hot-toast";

const useAddChallenge = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: async (data) => {
        console.log("datain mut",data)
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("points", data.points);
        formData.append("category", data.category);
        formData.append("hints", data.hints);
        formData.append("attechmentFile", data.attechmentFile);
  
        const response = await API.post("/Challenges", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        return response.data;
      },
  
      onSuccess: () => {
        toast.success("تم إضافة التحدي بنجاح!");
        queryClient.invalidateQueries(["Challenges"]);
      },
  
      onError: (error) => {
        console.error("❌ خطأ أثناء الإرسال:", error);
        const errorMessage =
          error.response?.data?.message || "حدث خطأ غير متوقع!";
        toast.error(`⚠️ ${errorMessage}`);
      },
  
      onSettled: () => {
        queryClient.invalidateQueries(["Challenges"]);
      },
    });
  };
  

export default useAddChallenge;
