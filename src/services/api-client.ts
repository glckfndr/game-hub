import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: { key: "9d12a5fc547f4615af6f8a1dfaf0015b" },
});
