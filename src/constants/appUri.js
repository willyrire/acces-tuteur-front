import { devStatus } from "@/config";

export const appUri = devStatus === "prod" ? "https://app.accestuteur.ca/" : "http://localhost:5174/";