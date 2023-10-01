import { NewsLinkList } from "@/features/news/components/NewsLinkList";
import { mockNewsList } from "../datas";
export const NewsSection = () => {
  return (
    <section className="bg-gray-200 py-10 w-full flex flex-col items-center">
      <h3 className="text-slate-900 m-1 text text-3xl font-bold">お知らせ</h3>
      InfomationSection
      <div className="m-2">
        <NewsLinkList newsList={mockNewsList} />
      </div>
    </section>
  );
};
