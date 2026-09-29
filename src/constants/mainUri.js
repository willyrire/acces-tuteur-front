import { devStatus } from "./config.js";

export const mainUri = devStatus === "dev" ? "http://localhost:5173/" : "https://accestuteur.ca/";