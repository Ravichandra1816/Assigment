import axios from "axios";

const BASE_URL = "https://reqres.in/api";

const loginUser = async (credentials) => {
  try {
    const res = await axios.post(`${BASE_URL}/logi`, credentials);
    return res.data;
  } catch (error) {
    throw error.res.data;
  }
};

const updateUser = async (id, userData) => {
  try {
    const res = await axios.put(`${BASE_URL}/users/${id}`, userData);
    return res.data;
  } catch (error) {
    throw error.res.data;
  }
};

const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/users/${id}`);
    return { success: true };
  } catch (error) {
    throw error.res.data;
  }
};

export { loginUser, updateUser, deleteUser };
