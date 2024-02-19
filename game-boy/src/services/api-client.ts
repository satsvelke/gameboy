import axios, { AxiosRequestConfig } from "axios";

export interface DataResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a32767ef332464d8a31641a327d2d29",
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return apiClient
      .get<DataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
