import axios from "axios";

// Safely set the baseURL with a fallback
const baseURL =
  typeof window === "undefined"
    ? process.env.NEXTAUTH_URL + "/api" || "http://localhost:3000/api" // Server-side
    : "";

export const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${session?.user?.accessToken}`,
  },
});