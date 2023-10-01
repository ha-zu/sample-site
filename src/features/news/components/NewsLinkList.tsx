import { NewsLink } from "@/features/news/components/NewsLink";
import { FunctionComponent } from "react";
import { News } from "../types";

interface Props {
  newsList: News[];
  className?: string;
}

export const NewsLinkList: FunctionComponent<Props> = ({
  newsList,
  className,
}) => {
  return (
    <div className={`${className}`}>
      {newsList.map((news) => (
        <NewsLink key={news.id} news={news} />
      ))}
    </div>
  );
};
