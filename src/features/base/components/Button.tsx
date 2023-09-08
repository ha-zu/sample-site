import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Button: FunctionComponent<Props> = ({
  className = "",
  children,
}) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-bold bg-secondary text-white ${className}`}
    >
      {children}
    </button>
  );
};
