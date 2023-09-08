import { FunctionComponent } from "react";

interface Props {
  className?: string;
  label: string;
}

export const HeroTitle: FunctionComponent<Props> = ({ className, label }) => {
  return <h1 className={`text-4xl font-bold ${className}`}>{label}</h1>;
};
