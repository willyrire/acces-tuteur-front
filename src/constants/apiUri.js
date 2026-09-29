import { devStatus } from "./config.js";

export const apiUri = devStatus === "dev" ? "http://localhost/" : "https://api.accestuteur.ca/";