import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "https://p0-api-yatg.onrender.com";

export const socket = io(URL);
