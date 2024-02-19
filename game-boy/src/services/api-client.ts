import axios from "axios";

export interface DataResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const create = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a32767ef332464d8a31641a327d2d29",
  },
});

export default create;
