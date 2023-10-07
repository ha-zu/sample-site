import Link from "next/link";
import { FunctionComponent } from "react";
import { News } from "../types";

interface Props {
  news: News;
}

export const NewsLink: FunctionComponent<Props> = ({ news }) => {
  return (
    <div className="grid grid-cols-2 mt-2 gap-4 text-xl">
      <div className="">{news.upload}</div>
      <div className="">
        <Link
          className="text-sky-500 p-10"
          href={{
            pathname: "/news/[id]",
            query: { id: news.id },
          }}
        >
          {news.title}
        </Link>
      </div>
    </div>
  );
};
