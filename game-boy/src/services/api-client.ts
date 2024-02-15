import axios from "axios";

const create = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a32767ef332464d8a31641a327d2d29",
  },
});

export default create;
