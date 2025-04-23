import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "https://087a-105-235-134-186.ngrok-free.app";

export const socket = io(URL);
