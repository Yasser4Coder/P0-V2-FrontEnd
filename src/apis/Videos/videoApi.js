import API from "../axiosInstance";

export const getVideos = async () => {
  const response = await API.get("/videos");
  return response.data;
};

export const updateVideos = async (data) => {
  return await API.put("/videos", data);
};
