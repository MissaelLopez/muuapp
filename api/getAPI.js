import axios from "axios";
import Config from "../app.json";

export const getAPI = axios.create({
  baseURL: `${Config.env.SERVER_URL}/api`,
});
