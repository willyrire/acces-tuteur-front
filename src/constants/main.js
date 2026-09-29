import { devStatus } from "@/config.js";

export const auth_login = devStatus === "prod" 
    ? "https://accestuteur.ca/auth/login"
    : "http://localhost:5173/auth/login"; 
export const auth_register = devStatus === "prod"
    ? "https://accestuteur.ca/auth/register"
    : "http://localhost:5173/auth/register"; 