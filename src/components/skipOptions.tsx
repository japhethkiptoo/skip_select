import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { skipOptionService } from "../services/skipOption.service";
import { SkipOption } from "./skipOption";
import type { Skip } from "../types";

export const SkipOptions = () => {
  const { data, loading, error } = useFetch<Skip[]>(
    skipOptionService.fetchOptions,
    [],
  );

  const [selectedSkip, setSelectedSkip] = useState<string | null>(null);

  const handleSkipChange = (event: any) => {
    const select_value = event.target.value;
    console.log(select_value, selectedSkip);
    if (selectedSkip === select_value) {
      setSelectedSkip(null);
      return;
    }
    setSelectedSkip(select_value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6">
      <div className=" flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 capitalize">
          Choose your skip size
        </h2>
        <p className="text-xl text-gray-400">
          Select the skip size that best suits your needs.
        </p>
      </div>

      <div>{selectedSkip}</div>

      <div className="grid gri-cols-1 md:grid-cols-2 gap-6">
        {data.map((option) => (
          <SkipOption
            id={option.id}
            key={option.id}
            option={option}
            name="skip"
            value={option.id}
            checked={selectedSkip === String(option.id)}
            onChange={handleSkipChange}
          />
        ))}
      </div>
    </div>
  );
};
