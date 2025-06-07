import { useFetch } from "../hooks/useFetch";
import { skipOptionService } from "../services/skipOption.service";

export const SkipOptions = () => {
  const { data, loading, error } = useFetch(skipOptionService.fetchOptions, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6">
      <div className=" flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Choose your skip size</h2>
        <p className="text-xl text-gray-400">
          Select the skip size that best suits your needs.
        </p>
      </div>

      <div className="grid gri-cols-1 md:grid-cols-2 gap-6">
        {/* <SkipOption /> */}
        {JSON.stringify(data)}
      </div>
    </div>
  );
};
