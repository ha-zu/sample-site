import { FunctionComponent } from "react";

interface Props {
  className?: string;
  label: string;
}

export const HeroCaption: FunctionComponent<Props> = ({ className, label }) => {
  return (
    <div className="bg-white text-primary rounded-full font-bold px-4 py-2">
      {label}
    </div>
  );
};
