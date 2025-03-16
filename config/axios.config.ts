import axios from "axios";

// Safely set the baseURL with a fallback
const baseURL = process.env.NEXTAUTH_URL + "/api";

export const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${session?.user?.accessToken}`,
  },
});
