import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddChallengeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState(null);

  const onSubmit = async (data) => {
    console.log("data ch",data)
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("points", data.points);
    formData.append("category", data.category);
    formData.append("hints", data.hints);
    formData.append("attachmentFile", file);
    formData.append("wave", data.wave);


    try {
      const response = await fetch("http://localhost:6010/api/challenges", {
        method: "POST",
        body: formData,
        credentials: "include", // 🔥 مهم جدًا للسماح بإرسال ملفات تعريف الارتباط
      });

      const textResponse = await response.text(); // استلام الاستجابة على شكل نص
      console.log("Response Text:", textResponse);

      // الآن إذا كانت الاستجابة بنجاح، نحاول تحويلها إلى JSON
      if (response.ok) {
        const result = JSON.parse(textResponse); // تحويل النص إلى JSON
        toast.success("تم إضافة التحدي بنجاح!");
      } else {
        toast.error(textResponse || "حدث خطأ أثناء الإرسال");
      }
    } catch (error) {
      console.error("❌ خطأ أثناء الإرسال:", error);
      toast.error("حدث خطأ غير متوقع");
    }
  };

  // التعامل مع تغيير الملف
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          rows="3"
          className="w-full p-2 border border-gray-300 rounded-md"
          {...register("description", { required: true })}
        />
        {errors.description && <span>Description is required</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Points
        </label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md"
          {...register("points", { required: true })}
        />
        {errors.points && <span>Points are required</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          {...register("category", { required: true })}
        />
        {errors.category && <span>Category is required</span>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Hints
        </label>
        <textarea
          rows="2"
          className="w-full p-2 border border-gray-300 rounded-md"
          {...register("hints")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Attachment
        </label>
        <input
          type="file"
          accept=".jpg,.png,.pdf,.docx"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {" "}
          Wave
        </label>
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md"
          {...register("wave")}
        />
      </div>
      .
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add Challenge
      </button>
    </form>
  );
};

export default AddChallengeForm;
