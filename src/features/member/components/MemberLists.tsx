import Image from "next/image";
import { FunctionComponent } from "react";

const Members = [
  // example
  {
    image: "https://via.placeholder.com/250",
    nameJA: "メンバー1",
    nameUS: "Member1",
    departments: ["代表取締役"],
  },
  {
    image: "https://via.placeholder.com/250",
    nameJA: "メンバー2",
    nameUS: "Member2",
    departments: ["役員", "営業"],
  },
  {
    image: "https://via.placeholder.com/250",
    nameJA: "メンバー3",
    nameUS: "Member3",
    departments: ["役員", "経営企画"],
  },
  {
    image: "https://via.placeholder.com/250",
    nameJA: "メンバー4",
    nameUS: "Member4",
    departments: ["イベント"],
  },
  {
    image: "https://via.placeholder.com/250",
    nameJA: "メンバー5",
    nameUS: "Member5",
    departments: ["広報"],
  },
  {
    image: "https://via.placeholder.com/250",
    nameJA: "メンバー6",
    nameUS: "Member6",
    departments: ["経理"],
  },
];

export const MemberLists: FunctionComponent = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {Members.map((member, member_index) => (
        <div className="w-[280px] h-[390px] bg-gray-100" key={member_index}>
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
      ))}
    </div>
  );
};
