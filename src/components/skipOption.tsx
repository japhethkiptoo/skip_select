import { AlertTriangle, Calendar } from "lucide-react";
import type { Skip } from "../types";
import { cn } from "../utils/cn";

type Props = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  option: Skip;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const SkipOption = (props: Props) => {
  const { id, name, value, checked, option, onChange, onClick } = props;

  const title = `${option.size} yard skip`;
  const hire_period = `${option.hire_period_days} day hire period`;
  const badge = `${option.size} Yards`;
  const cost = `${option.price_before_vat}`;

  return (
    <label
      htmlFor={id}
      className={cn(
        "border-2 p-6 rounded-lg transition-all cursor-pointer select-none",
        {
          "border-[#0037C1] bg-[#0037C1]/10": checked,
          "bg-[#C1C1C1]/10 border-[#2A2A2A] hover:border-[#0037C1]/50":
            !checked,
        },
      )}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onClick={onClick}
        className="sr-only peer"
      />

      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center shadow-md rounded-full px-2 py-.5 text-sm font-medium bg-[#0037C1] text-white">
              {badge}
            </span>
          </div>

          <h3 className="text-lg font-bold capitalize md:text-xl md:font-extrabold">
            {title}
          </h3>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{hire_period}</span>
          </div>

          {!option.allowed_on_road && (
            <div className="flex items-center rounded-lg">
              <AlertTriangle className="w-4 h-4 mr-2 text-amber-600" />
              <span className="capitalize text-sm text-amber-600">
                Not allowed on road
              </span>
            </div>
          )}
        </div>

        <div>
          <p className="text-right font-bold text-[#0037C1]">
            <span className="text-lg">£</span>
            <span className="text-2xl font-extrabold md:text-4xl">{cost}</span>
          </p>
        </div>
      </div>
    </label>
  );
};
