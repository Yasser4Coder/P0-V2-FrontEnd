import React from "react";
import { useForm } from "react-hook-form";
import { useCreateAnnouncement } from "../../../apis/Announcements/createAnnouncement";

const AddAnnouncement = () => {
  const { register, handleSubmit } = useForm();

  const { mutate: createAnnouncement } = useCreateAnnouncement();

  const onSubmit = (data) => {
    createAnnouncement(data, {
      onSuccess: () => {
        console.log("Mentor request sent successfully");
      },
      onError: (error) => {
        console.error("Error calling mentor:", error);
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Content</label>
        <input
          type="text"
          {...register("content", { required: true })}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Announcement
      </button>
    </form>
  );
};

export default AddAnnouncement;
