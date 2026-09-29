import { devStatus } from "@/config";

export const mainUri = devStatus === "prod" ? "https://accestuteur.ca/" : "http://localhost:5173/";