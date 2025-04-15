import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "../../socket";
import { updateFaviconWithNotification } from "../utils/faviconUtils";

const UnreadAnnouncementsContext = createContext();

export const UnreadAnnouncementsProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Initial load from local storage
    const savedCount = parseInt(localStorage.getItem("unreadCount") || "0");
    setUnreadCount(savedCount);

    // Listen for new announcements
    socket.on("new_announcement", () => {
      updateFaviconWithNotification();
      setUnreadCount((prev) => {
        const updated = prev + 1;
        localStorage.setItem("unreadCount", updated.toString());
        return updated;
      });
    });

    return () => {
      socket.off("new_announcement");
    };
  }, []);

  // Reset when user visits the page
  const resetUnreadCount = () => {
    localStorage.setItem("unreadCount", "0");
    setUnreadCount(0);
  };

  return (
    <UnreadAnnouncementsContext.Provider
      value={{ unreadCount, resetUnreadCount }}
    >
      {children}
    </UnreadAnnouncementsContext.Provider>
  );
};

export const useUnreadAnnouncements = () =>
  useContext(UnreadAnnouncementsContext);
