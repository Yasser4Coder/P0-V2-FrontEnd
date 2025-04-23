import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "https://89ad-105-235-136-158.ngrok-free.app";

export const socket = io(URL);
