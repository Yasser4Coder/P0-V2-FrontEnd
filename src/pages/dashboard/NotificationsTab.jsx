import { Send } from "lucide-react";

const NotificationsTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Send Notifications</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={""}
            placeholder="Notification title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows="3"
            className="w-full p-2 border border-gray-300 rounded-md"
            value=""
            placeholder="Type your notification message here..."
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipients
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value=""
          >
            <option value="all">All Users</option>
            <option value="active">Active Participants</option>
            <option value="inactive">Inactive Users</option>
          </select>
        </div>
        <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          <Send className="w-4 h-4" />
          <span>Send Notification</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Notification History</h2>
        {/* <p className="text-gray-500">No notifications sent yet.</p> */}
        <div className="space-y-4">
          <div className="border border-gray-200 p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold">title</h3>
              <span className="text-sm text-gray-500">data</span>
            </div>
            <p className="text-gray-700 mt-1">message</p>
            <div className="mt-2 text-sm text-gray-500">Sent to: </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsTab;
