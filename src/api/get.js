import axios from "axios";
import Config from "../../app.json";

const api = axios.create({
  baseURL: `${Config.env.SERVER_URL}/api`,
});

export const getUserById = async (id, token) => {
  try {
    const { data, status } = await api.get(`/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return { data, status };
  } catch (error) {
    return error.message;
  }
};

export const getCowsByRanchId = async (id, token) => {
  try {
    const { data, status } = await api.get(`/ranchs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return { data, status };
  } catch (error) {
    return error.message;
  }
};
