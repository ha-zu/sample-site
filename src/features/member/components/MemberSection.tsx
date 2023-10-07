import { MemberLists } from "@/features/member/components/MemberLists";
export const MemberSection = () => {
  return (
    <section id="member" className="py-10 flex flex-col items-center">
      <h3 className="text-slate-900 m-1 text text-3xl font-bold">社員一覧</h3>
      MEMBER
      <div className="m-2">
        <MemberLists />
      </div>
    </section>
  );
};
