import type { Skip } from "../types";

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

  return (
    <label
      htmlFor={id}
      className={
        checked
          ? "border-2 p-6 rounded-lg border-[#0037C1] bg-[#0037C1]/10"
          : "border-2 p-6 rounded-lg bg-[#C1C1C1]/10 border-[#2A2A2A]"
      }
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

      <div>
        <span>{badge}</span>
        <h2>{title}</h2>
        <p>{hire_period}</p>
      </div>
    </label>
  );
};
