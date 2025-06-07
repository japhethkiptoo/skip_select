import { useEffect, useState } from "react";

//for clean data fetching
type Response<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T>(
  fetchFn: () => Promise<T>,
  deps: React.DependencyList[] = [],
): Response<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //instantiation and calling of fetch func.
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchFn();
        setData(response);
        setLoading(false);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, deps);

  return { data, loading, error };
}
