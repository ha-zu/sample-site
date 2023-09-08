import Image from "next/image";
import { FunctionComponent } from "react";

const Members = [
  // example
  {
    image: "https://via.placeholder.com/250",
    name: "メンバー1",
    departments: ["代表取締役"],
  },
  {
    image: "https://via.placeholder.com/250",
    name: "メンバー2",
    departments: ["役員", "営業"],
  },
  {
    image: "https://via.placeholder.com/250",
    name: "メンバー3",
    departments: ["役員", "経営企画"],
  },
  {
    image: "https://via.placeholder.com/250",
    name: "メンバー4",
    departments: ["イベント"],
  },
  {
    image: "https://via.placeholder.com/250",
    name: "メンバー5",
    departments: ["広報"],
  },
  {
    image: "https://via.placeholder.com/250",
    name: "メンバー6",
    departments: ["経理"],
  },
];

export const MemberLists: FunctionComponent = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {Members.map((member, member_index) => (
        <div className="w-[270px] h-[350px] bg-gray-100" key={member_index}>
          <a href="#">
            <Image src={member.image} width={270} height={250} alt="img" />
          </a>
          <div className="flex justify-center">
            <p>{member.name}</p>
          </div>
          <div className="flex justify-center p-2">
            {member.departments.map((department, department_index) => (
              <span
                className="m-1 p-1 rounded bg-blue-300"
                key={department_index}
              >
                {department}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
