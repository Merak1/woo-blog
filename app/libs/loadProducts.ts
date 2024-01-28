import axios from "axios";

export const loadProducts = async () => {
  const { data } = await axios.get("http://localhost:3000/api/blog");
  return data;
};
