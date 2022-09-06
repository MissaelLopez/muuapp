import axios from "axios";
import Config from "../../app.json";

export const authAPI = axios.create({
  baseURL: `${Config.env.SERVER_URL}/api`,
  method: "POST",
});
