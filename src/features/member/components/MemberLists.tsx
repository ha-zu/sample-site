import { FunctionComponent } from "react";
import { MemberPanel } from "./MemberPanel";
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
    <div className={`grid grid-cols-1 md:grid-cols-3 md:gap-3`}>
      {Members.map((member, member_index) => (
        <MemberPanel key={member_index} member={member} />
      ))}
    </div>
  );
};
