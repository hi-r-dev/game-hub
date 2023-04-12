import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "20093696784e43febdb822eee4d07f6e",
  },
});
