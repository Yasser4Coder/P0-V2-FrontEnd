import API from "../axiosInstance";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const getSubmissionScoresByCategory = async (teamId) => {
    try {
        const response = await API.get(`/submissions/team/${teamId}/scores/category`);

        if (response.status !== 200) {
            throw new Error("Failed to fetch submission scores");
        }
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching submission scores:", error);
        throw new Error("Failed to fetch submission scores");
    }
}
export const useGetSubmissionScoresByCategory = (teamId) => {
    return useQuery({
        queryKey: ["submissionScores", teamId],
        queryFn: () => getSubmissionScoresByCategory(teamId),
        onError: (error) => {
            console.error("Error fetching submission scores:", error);
            toast.error("Failed to fetch submission scores");
        },
    });
}
export default getSubmissionScoresByCategory;

