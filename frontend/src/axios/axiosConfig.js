import axios from "axios";

export const instance = axios.create({
  baseURL: "https://lumini-production.up.railway.app/",
  headers: { "X-Custom-Header": "foobar" },
  mode: "cors",
});
