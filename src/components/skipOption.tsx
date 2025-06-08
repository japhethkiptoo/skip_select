import type { Skip } from "../types";
import { cn } from "../utils/cn";

type Props = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  option: Skip;
  onChange: (event: any) => void;
};

export const SkipOption = (props: Props) => {
  const { id, name, value, checked, option, onChange } = props;

  const title = `${option.size} yard skip`;
  const hire_period = `${option.hire_period_days} day hire period`;
  const badge = `${option.size} Yards`;
  const cost = `£${option.price_before_vat}`;

  return (
    <label
      htmlFor={id}
      className={cn("border-2 p-6 rounded-lg transition-all", {
        "border-[#0037C1] bg-[#0037C1]/10": checked,
        "bg-[#C1C1C1]/10 border-[#2A2A2A] hover:border-[#0037C1]/50": !checked,
      })}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />

      <div className="flex-1">
        <span>{badge}</span>
        <h3 className="text-lg font-semibold capitalize mb-2 md:text-xl">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{hire_period}</p>

        <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
          {cost}
        </span>
      </div>
    </label>
  );
};
