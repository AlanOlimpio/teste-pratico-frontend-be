import axios from "axios";

import { env } from "../../src/env";

export const api = axios.create({
  baseURL: env.VITE_BACK_END_URL,
  withCredentials: true,
});
