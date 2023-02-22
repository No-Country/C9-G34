import axios from "axios";

export const instance = axios.create({
  baseURL: "url",
  headers: { "X-Custom-Header": "foobar" },
  mode: "cors",
});
