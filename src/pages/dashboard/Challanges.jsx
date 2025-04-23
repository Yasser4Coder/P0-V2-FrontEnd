import React from "react";
import { useChallenges } from "../../apis/Challenges/seeAll";
import API from "../../apis/axiosInstance";

function Challenges() {
  const { data: challenges, isLoading, refetch } = useChallenges();

  if (isLoading) return <p>Loading challenges...</p>;

  const toggleStatus = async (challenge) => {
    const newStatus = challenge.status === "active" ? "inactive" : "active";
    try {
      await API.patch(`challenges/status/${challenge._id}`, {
        status: newStatus,
      });
      await refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">All Challenges</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Points
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Gate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {challenges?.map((challenge) => (
              <tr key={challenge._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {challenge.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {challenge.points}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {challenge.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {challenge.wave}
                </td>
                <td
                  onClick={() => toggleStatus(challenge)}
                  className={`px-6 py-4 whitespace-nowrap cursor-pointer text-white ${
                    challenge.status === "active"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {challenge.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Challenges;
