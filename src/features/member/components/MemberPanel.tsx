import Image from "next/image";
import { FunctionComponent } from "react";

interface Props {
  className?: string;
  member: {
    image: string;
    nameJA: string;
    nameUS: string;
    departments: string[];
  };
}

export const MemberPanel: FunctionComponent<Props> = ({
  className,
  member,
}) => {
  return (
    <div className="w-full my-2 max-w-[280px] h-[390px] bg-gray-100">
      <a href="#">
        <Image src={member.image} width={280} height={280} alt="img" />
        <div className="flex justify-center">
          <div className="p-2">
            <p>
              <strong>{member.nameJA}</strong>
            </p>
            <p>{member.nameUS}</p>
          </div>
        </div>
        <div className="flex justify-center p-1">
          {member.departments.map((department, department_index) => (
            <span
              className="m-1 p-1 rounded bg-blue-300"
              key={department_index}
            >
              {department}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};
