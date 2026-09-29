import { devStatus } from "@/config";

export const apiUri = devStatus === "prod" ? "https://api.accestuteur.ca" : "http://localhost";