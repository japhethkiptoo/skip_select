import { useEffect, useState } from "react";

//for clean data fetching
type Response = {
  data: any;
  loading: boolean;
  error: string | null;
};

export const useFetch = (
  fetchFn: () => Promise<any>,
  deps: React.DependencyList[] = [],
): Response => {
  const [data, setData] = useState<any>(null);
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
};
