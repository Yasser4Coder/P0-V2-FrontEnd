import { Edit, Trash, Eye, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTeams } from "../../apis/teams/seeAll";
import useAddUser from "../../apis/users/addUser";
import useDeleteUsers from "../../apis/users/deleteUser";
import useEditeUser from "../../apis/users/editeUser";
import { useUsers } from "../../apis/users/seeAll";
const UsersTab = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { data: teams } = useTeams();
  const { data: users, isLoading, error } = useUsers();
  const { mutate: addUserMutate } = useAddUser();
  const { mutate: updateUserMutate } = useEditeUser(); 
  const deleteMutation = useDeleteUsers();

  const roles = ["Admin", "participant"]; 

  const onSubmit = (data) => {
    console.log("Form data users:", data);
    if (data._id) {
      updateUserMutate(data);
    } else {
      addUserMutate(data);
    }
    reset();
  };

  const handleEdit = (user) => {
    setValue("name", user.name);
    setValue("_id", user._id);
    setValue("role", user.role);
    setValue("teamId", user.teamId);
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                {...register("password", { required: true })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select {...register("role", { required: true })} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Team</label>
              <select {...register("teamId", { required: true })} className="w-full p-2 border border-gray-300 rounded-md">
                <option value="">Select Team</option>
                {teams?.map((team) => (
                  <option key={team._id} value={team._id}>{team.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="mt-1 flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              <span>{!reset._id ? "Add Team" : "Update Team"}</span>
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Users List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users?.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role =="participant"?user.teamId.name:"not fond"}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleEdit(user)} className="text-yellow-600 hover:text-yellow-900 mr-2">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button onClick={() => deleteMutation.mutate(user._id)} className="text-red-600 hover:text-red-900">
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

export default UsersTab;
