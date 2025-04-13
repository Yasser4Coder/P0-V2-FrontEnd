import { Eye } from "lucide-react";
import API from "../../apis/axiosInstance";
import { useEffect, useState } from "react";
import { Copy } from "lucide-react";

const SubmissionsTab = () => {
  const [data, setData] = useState([]);
  const [points, setPoints] = useState(0);
  const [currentSubmissionId, setCurrentSubmissionId] = useState(null);

  const fetchSubmissions = async () => {
    try {
      const response = await API.get("/submissions");
      setData(response.data);
      console.log("Submissions data:", response.data);
    } catch (err) {
      console.error("Error fetching submissions:", err);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await API.post("/scores", {
        submissionId: currentSubmissionId,
        judgeId: "67e0b8038ac2e0553acd7e9e",
        score: points,
        comments: "test",
      });

      // 🔄 Fetch updated data from backend
      await fetchSubmissions();
    } catch (error) {
      console.error("Error adding score:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Submissions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Challenge
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                submited file
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                submited Link
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                add pointes
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.map((submission) => (
              <tr
                className={`${
                  submission.status === "reviewed" ? "bg-green-100" : ""
                }`}
                key={submission._id}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.teamId.name || "Untitled"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.userId?.name || "Unknown"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.challengeId?.title || "Unknown"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(submission.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={submission.submissionFile}
                    className=" underline cursor-pointer text-blue-400"
                    download
                  >
                    Download
                  </a>
                </td>
                <td
                  className="px-6 py-4 max-w-[200px] truncate cursor-pointer relative group"
                  onClick={() =>
                    navigator.clipboard.writeText(submission.submissionText)
                  }
                >
                  <div className="flex items-center space-x-2">
                    <span
                      title={submission.submissionText}
                      className="truncate"
                    >
                      {submission.submissionText}
                    </span>
                    <Copy className="w-4 h-4 absolute top-[40%] right-0 text-gray-500 group-hover:text-gray-800" />
                  </div>

                  <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1 z-10">
                    Click to copy
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      submission.status
                    )}`}
                  >
                    {submission.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="number"
                      min="0"
                      className="border rounded px-2 py-1 text-sm w-24"
                      placeholder="Add points"
                      onChange={(e) => {
                        setCurrentSubmissionId(submission._id);
                        setPoints(parseFloat(e.target.value));
                      }}
                    />
                    <button
                      type="submit"
                      className=" bg-green-500 p-[3px] rounded-md flex items-center justify-center text-white cursor-pointer"
                    >
                      send
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionsTab;
