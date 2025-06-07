type Props = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
};

export const SkipOption = ({ id, name, value, checked = false }: Props) => {
  return (
    <label htmlFor={id} className="border flex">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        className="sr-only peer"
      />
      <p>description</p>
    </label>
  );
};
