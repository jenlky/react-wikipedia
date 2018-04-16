import React from "react";
import ArticleRow from "./article_row";

const ArticleList = ({dataArray}) => {
  return (
    <div className="container container--margin--top container--font">
      <table className="header__table--margin--btm">
        <thead>
          <tr>
            <th className="text article__title">Article Title</th>
            <th className="text snippet">Snippet (click to view article)</th>
          </tr>
        </thead>
      </table>
      <ArticleRow dataArray={dataArray} />
    </div>
  );
}

export default ArticleList;
