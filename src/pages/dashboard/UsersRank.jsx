import React from "react";
import { useUsers } from "../../apis/users/seeAll";

const UsersRank = () => {
  const { data: users, isLoading } = useUsers();

  if (isLoading) return <p>Loading users...</p>;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Users Rank</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer">
                AI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer">
                GD
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer">
                CS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer">
                PS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer">
                Total score
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users
              ?.filter((user) => user.role === "participant")
              .sort((a, b) => b.statistics.score - a.statistics.score)
              .map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user?.teamId?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user?.statistics?.challengeSolved?.AI || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user?.statistics?.challengeSolved?.GD || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user?.statistics?.challengeSolved?.CS || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user?.statistics?.challengeSolved?.PS || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user?.statistics?.score || 0}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersRank;
