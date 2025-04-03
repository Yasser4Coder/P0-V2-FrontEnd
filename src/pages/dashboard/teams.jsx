import { Edit, Trash, Eye, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTeams } from "../../apis/teams/seeAll";
import useAddTeam from "../../apis/teams/addTeam";
import useDeleteTeam from "../../apis/teams/deleteTeam";
import useEditeTeam from "../../apis/teams/editeTeam";
const Teams = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { data: teams, isLoading, error } = useTeams();
  const { mutate: addTeamMutate } = useAddTeam();
  const { mutate: updateTeamMutate } = useEditeTeam(); 
  const deleteMutation = useDeleteTeam();
 console.log("teamssss",teams)
  const onSubmit = (data) => {
    console.log("Form data:", data);
    if (data._id) {
      updateTeamMutate(data);
    } else {
      addTeamMutate(data); 
    }
    reset();
  };

  const handleEdit = (team) => {
    setValue("name", team.name);
    setValue("_id", team._id); 
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading teams: {error.message}</p>;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{!reset._id ? "Add New Team" : "Edit Team"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register("name", { required: true })}
              />
            </div>
            <button type="submit" className="mt-1 flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              <span>{!reset._id ? "Add Team" : "Update Team"}</span>
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Team List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Members</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teams?.map((team) => (
                <tr key={team._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{team.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{team.members.length}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleEdit(team)} 
                      className="text-yellow-600 hover:text-yellow-900 mr-2"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button onClick={() => deleteMutation.mutate(team._id)} className="text-red-600 hover:text-red-900">
                      <Trash className="w-5 h-5" />
                    </button>
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

export default Teams;
