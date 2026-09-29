import { devStatus } from "./config.js";

export const appUri = devStatus === "dev" ? "http://localhost:5174/" : "https://app.accestuteur.ca/";