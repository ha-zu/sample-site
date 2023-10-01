import Link from "next/link";
import { FunctionComponent } from "react";
import { News } from "../types";

interface Props {
  news: News;
}

export const NewsLink: FunctionComponent<Props> = ({ news }) => {
  return (
    <div className="grid grid-cols-2 mt-2 gap-4 text-xl">
      <div>2023/9/30</div>
      <Link
        href={{
          pathname: "/news/[id]",
          query: { id: news.id },
        }}
      >
        <div className="text-sky-500">{news.title}</div>
      </Link>
    </div>
  );
};
