import React from "react";

const ArticleRow = ({dataArray}) => {
  const dataRow = dataArray.map(row => {
    console.log(row.title);
    return (
      <React.Fragment>
        <div className="title" key={row.title}>{row.title}</div>
        <a href={row.link} className="content" key={row.link} target="_blank">{row.content}</a>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      {dataRow}
    </React.Fragment>
  );
}

export default ArticleRow;
