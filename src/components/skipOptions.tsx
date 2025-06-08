import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { skipOptionService } from "../services/skipOption.service";
import { SkipOption } from "./skipOption";
import type { Skip } from "../types";
import { MoveRight, LoaderCircle } from "lucide-react";

export const SkipOptions = () => {
  const { data, loading, error } = useFetch<Skip[]>(
    skipOptionService.fetchOptions,
    [],
  );

  const [selectedSkip, setSelectedSkip] = useState<string | null>(null);

  //selectedSkip
  const selected_skip = data?.find(
    (option) => String(option.id) === selectedSkip,
  );

  const handleSkipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const select_value = event.target.value;
    console.log(select_value, selectedSkip);
    if (selectedSkip === select_value) {
      setSelectedSkip(null);
      return;
    }
    setSelectedSkip(select_value);
  };

  const handleSkipClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const select_value = event.currentTarget.value;
    if (selectedSkip === select_value) {
      setSelectedSkip(null);
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 pb-32 px-5 lg:px-0">
        <div className=" flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 capitalize">
            Choose your skip size
          </h2>
          <p className="text-gray-400">
            Select the skip size that best suits your needs.
          </p>
        </div>

        {loading && (
          <div className="max-w-2/5 md:max-w-1/2 mx-auto">
            <LoaderCircle className="animate-spin text-[#0037C1]" />
          </div>
        )}
        {error && !loading && (
          <div className="max-w-2/5 md:max-w-1/2 mx-auto">
            <span>Oops! An error occurred, please try again</span>
          </div>
        )}

        {!data && !loading && (
          <div className="max-w-2/5 md:max-w-1/2 mx-auto">
            <span>Oops! No skip options available</span>
          </div>
        )}

        <div className="grid gri-cols-1 md:grid-cols-2 gap-6">
          {data &&
            data.map((option) => (
              <SkipOption
                id={option.id}
                key={option.id}
                option={option}
                name="skip"
                value={option.id}
                checked={selectedSkip === String(option.id)}
                onChange={handleSkipChange}
                onClick={handleSkipClick}
              />
            ))}
        </div>
      </div>

      {selectedSkip && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C]  border-t border-[#2A2A2A] p-4 animate-slide-up z-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center gap-3 justify-between">
                <div>
                  <span className=" text-gray-400 font-bold capitalize">{`${selected_skip?.size} yard skip`}</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#0037C1]">{`£${selected_skip?.price_before_vat} `}</span>
                  <span className="text-sm text-gray-400 ml-2">{`${selected_skip?.hire_period_days} day hire`}</span>
                </div>
              </div>

              <div className="flex gap-4 items-center mt-2">
                <button className="btn-secondary w-full">Back</button>
                <button className="btn-primary w-full flex gap-2 items-center justify-center">
                  <span>Continue</span>
                  <MoveRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
