import { MemberLists } from "@/features/member/components/MemberLists";
export const MemberSection = () => {
  return (
    <div className="pt-20 flex flex-col items-center">
      <div className="text-2xl font-bold m-2">社員一覧</div>
      MemberSection
      <div className="m-2">
        <MemberLists />
      </div>
    </div>
  );
};
