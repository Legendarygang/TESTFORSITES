interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 32,
  height = 32,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="24" height="24" rx="4" fill="currentColor" />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="bold"
      >
        MH
      </text>
    </svg>
  );
};