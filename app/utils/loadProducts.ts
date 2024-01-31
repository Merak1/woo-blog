import axios from "axios";
import { BASE_URL_API } from "./constants";

export const loadProducts = async () => {
  const { data } = await axios.get(`${BASE_URL_API}/api/blog`);
  return data;
};
