import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface DataResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    var abortController = new AbortController();

    apiClient
      .get<DataResponse<T>>(endpoint, { signal: abortController.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return null;
        setLoading(false);
        setError(error.message);
      })
      .finally(() => {});

    return () => abortController.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
