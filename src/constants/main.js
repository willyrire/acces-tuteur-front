import { devStatus } from "./config.js";

export const auth_login = devStatus === "dev" 
    ? "http://localhost:5173/auth/login" 
    : "https://accestuteur.ca/auth/login";
export const auth_register = devStatus === "dev"
    ? "http://localhost:5173/auth/register" 
    : "https://accestuteur.ca/auth/register";