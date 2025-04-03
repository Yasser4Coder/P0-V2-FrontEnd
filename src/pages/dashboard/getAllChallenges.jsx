import { Edit, Trash, Eye } from "lucide-react";
import { useChallenges } from "../../apis/Challenges/seeAll";

const GetAllChallenges = () => {
  const { data: challenges, isLoading, error } = useChallenges();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading challenges: {error.message}</p>;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">All Challenges</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Challenges List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wave</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {challenges?.map((challenge) => (
                <tr key={challenge._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{challenge.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challenge.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{challenge.wave}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                      <Eye className="w-5 h-5" />
                    </button>
                    {/* <button onClick={() => handleEdit(challenge)} className="text-yellow-600 hover:text-yellow-900 mr-2">
                      <Edit className="w-5 h-5" />
                    </button> */}
                    {/* <button onClick={() => deleteMutation.mutate(challenge._id)} className="text-red-600 hover:text-red-900">
                      <Trash className="w-5 h-5" />
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetAllChallenges;
