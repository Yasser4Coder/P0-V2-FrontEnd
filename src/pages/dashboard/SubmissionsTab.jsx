import { Eye, Copy } from "lucide-react";
import API from "../../apis/axiosInstance";
import { useEffect, useState } from "react";

const SubmissionsTab = () => {
  const [data, setData] = useState([]);
  const [points, setPoints] = useState(0);
  const [currentSubmissionId, setCurrentSubmissionId] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const fetchSubmissions = async () => {
    try {
      const response = await API.get("/submissions");
      setData(response.data);
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
      await API.post("/scores", {
        submissionId: currentSubmissionId,
        judgeId: "67e0b8038ac2e0553acd7e9e",
        score: points,
        comments: "test",
      });
      await fetchSubmissions();
    } catch (error) {
      console.error("Error adding score:", error);
    }
  };

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aVal =
      sortConfig.key === "scoreTotal"
        ? a.scores?.reduce((sum, s) => sum + s.score, 0)
        : sortConfig.key === "team"
        ? a.teamId?.name
        : sortConfig.key === "user"
        ? a.userId?.name
        : sortConfig.key === "challenge"
        ? a.challengeId?.title
        : sortConfig.key === "date"
        ? new Date(a.createdAt)
        : a[sortConfig.key];

    const bVal =
      sortConfig.key === "scoreTotal"
        ? b.scores?.reduce((sum, s) => sum + s.score, 0)
        : sortConfig.key === "team"
        ? b.teamId?.name
        : sortConfig.key === "user"
        ? b.userId?.name
        : sortConfig.key === "challenge"
        ? b.challengeId?.title
        : sortConfig.key === "date"
        ? new Date(b.createdAt)
        : b[sortConfig.key];

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Submissions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
                onClick={() => sortData("team")}
              >
                Team
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
                onClick={() => sortData("user")}
              >
                User
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
                onClick={() => sortData("challenge")}
              >
                Challenge
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
                onClick={() => sortData("challenge")}
              >
                Category
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
                onClick={() => sortData("challenge")}
              >
                Gate
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
                onClick={() => sortData("date")}
              >
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Submitted file
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Submitted Link
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Acuurancy (AI)
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
                onClick={() => sortData("status")}
              >
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Add Points
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer"
                onClick={() => sortData("scoreTotal")}
              >
                Points
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((submission) => (
              <tr
                className={`${
                  submission.status === "reviewed" ? "bg-green-100" : ""
                }`}
                key={submission._id}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.teamId?.name || "Untitled"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.userId?.name || "Unknown"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.challengeId?.title || "Unknown"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.challengeId?.category || "Unknown"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.challengeId?.wave || "Unknown"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(submission.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={submission.submissionFile}
                    className="underline cursor-pointer text-blue-400"
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
                  {submission.accuracy + "%" || "Its not AI"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      submission.status === "reviewed"
                        ? "bg-green-600 text-white"
                        : getStatusColor(submission.status)
                    }`}
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
                      className="bg-green-500 p-[3px] rounded-md text-white"
                    >
                      send
                    </button>
                  </form>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {submission.scores?.reduce(
                    (total, item) => total + item.score,
                    0
                  )}
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
