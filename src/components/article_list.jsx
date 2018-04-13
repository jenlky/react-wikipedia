import React from "react";
import ArticleRow from "./article_row";

const ArticleList = ({dataArray}) => {
  console.log(dataArray);

  return (
    <div className="container container--spacing container--font">
      <div className="">
        <span className="col-md-2">Article title</span>
        <span className="col-md-10">Snippet (click to view article)</span>
      </div>
      <ArticleRow dataArray={dataArray} />
    </div>
  );
}

export default ArticleList;
