import { useGetNeeds } from "../../apis/Mentors/callMentor";

const Needs = () => {
  const { data: mentors, isLoading } = useGetNeeds();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (isLoading) return <p>Loading mentors...</p>;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Mentors Calls</h2>
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
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mentors?.map((need) => (
              <tr key={need?._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {need?.teamId?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {need?.userId?.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{need?.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(need?.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Needs;
