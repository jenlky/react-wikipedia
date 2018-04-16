import React from "react";
import ArticleRow from "./article_row";

const ArticleList = ({dataArray}) => {
  return (
    <div className="container container--spacing container--font">
      <div>
        <span className="col-md-2 article__title text">Article title</span>
        <span className="col-md-10 text">Snippet (click to view article)</span>
      </div>
      <ArticleRow dataArray={dataArray} />
    </div>
  );
}

export default ArticleList;
