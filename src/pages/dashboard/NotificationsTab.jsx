import { Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const NotificationsTab = () => {
  const [massege, setMassege] = useState("");
  const [result, setResult] = useState("");
  const [errColor, seterrColor] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/notifications/send", {
        message: massege,
      });
      seterrColor("text-green-500");
      setResult("Notification sent successfully");
      setTimeout(() => {
        setResult("");
      }, 3000);
    } catch (error) {
      console.log(error);
      seterrColor("text-red-500");
      setResult("Failed to send notification");
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };
  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">Send Notifications</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
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
            placeholder="Type your notification message here..."
            onChange={(e) => setMassege(e.target.value)}
          ></textarea>
          {result && (
            <h1 className={`block text-sm font-medium ${errColor} mb-1`}>
              {result}
            </h1>
          )}
        </div>

        <button
          type="submit"
          className=" cursor-pointer items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <Send className="w-4 h-4" />
          <span>Send Notification</span>
        </button>
      </form>

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
