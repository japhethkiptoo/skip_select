type Props = {
  selected?: boolean;
  size?: number;
};

const SkipIcon = ({ selected = false, size = 24 }: Props) => {
  const color = selected ? "#007bff" : "#6c757d"; // active vs inactive color

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M6 21C6 20.4 6.2 19.8 6.6 19.3L13.5 12.6C13.9 12.2 14.4 12 15 12H33C33.6 12 34.1 12.2 34.5 12.6L41.4 19.3C41.8 19.8 42 20.4 42 21V21C42 21.4 41.9 21.9 41.7 22.3L36 36H12L6.3 22.3C6.1 21.9 6 21.4 6 21Z"
        fill="none"
      />
      <line x1="16" y1="26" x2="32" y2="26" />
      <line x1="18" y1="30" x2="30" y2="30" />
    </svg>
  );
};

export default SkipIcon;
