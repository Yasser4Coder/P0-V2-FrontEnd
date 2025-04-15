import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getVideos, updateVideos } from "../../../apis/Videos/videoApi";
import toast from "react-hot-toast";

const VideoEditForm = () => {
  const { register, handleSubmit, reset, getValues } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch current video URLs
    getVideos()
      .then((data) => {
        reset({
          video1: data.video1 || "",
          video2: data.video2 || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch videos", err);
        setLoading(false);
      });
  }, [reset]);

  const onSubmit = async () => {
    const values = getValues();

    // Only include fields with non-empty values
    const payload = {};
    if (values.video1.trim() !== "") payload.video1 = values.video1.trim();
    if (values.video2.trim() !== "") payload.video2 = values.video2.trim();

    // Prevent sending empty body
    if (Object.keys(payload).length === 0) {
      toast.error("Please fill at least one video URL to update.");
      return;
    }

    try {
      await updateVideos(payload);
      toast.success("Videos updated successfully!");
    } catch (error) {
      console.error("Failed to update videos:", error);
      toast.error("Failed to update videos.");
    }
  };

  if (loading) return <p className="text-gray-600">Loading...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Video 1 URL</label>
        <input
          type="url"
          {...register("video1")}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Video 2 URL</label>
        <input
          type="url"
          {...register("video2")}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
};

export default VideoEditForm;
