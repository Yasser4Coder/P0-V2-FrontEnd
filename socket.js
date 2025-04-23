import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://62.171.145.207:5000";

export const socket = io(URL);
