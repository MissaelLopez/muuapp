import axios from "axios";
import Config from "../../app.json";

const api = axios.create({
  baseURL: `${Config.env.SERVER_URL}/api`,
});

export const deleteRanch = async (userId, ranchId, token) => {
  try {
    const { data, status } = await api.delete(`/ranchs/${userId}/${ranchId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return { data, status };
  } catch (error) {
    return error.message;
  }
};
