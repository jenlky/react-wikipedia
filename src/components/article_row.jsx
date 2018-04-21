import React from "react";

const ArticleRow = ({dataArray}) => {
  const dataRow = dataArray.map(row => {
    console.log(row.title);
    return (
      <React.Fragment>
        <div className="title" key={row.title}>{row.title}</div>
        <div className="content__div">
          <a href={row.link} className="content"  key={row.link}>{row.content}</a>
        </div>
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
