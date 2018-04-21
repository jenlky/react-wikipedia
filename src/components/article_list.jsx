import React from "react";
import ArticleRow from "./article_row";

const ArticleList = ({dataArray}) => {
  return (
    <section className="grid container container--margin container--font">
        <h4 className="header-text article__title">Article Title</h4>
        <h4 className="header-text snippet">Snippet (click to view article)</h4>
      <ArticleRow dataArray={dataArray} />
    </section>
  );
}

export default ArticleList;
