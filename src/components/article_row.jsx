import React from "react";

const ArticleRow = ({dataArray}) => {
  console.log(dataArray);

  const dataRow = dataArray.map(row => {
    return (
      <li key={row.title}>
        <p className="title col-md-2">{row.title}</p>
        <div className="content col-md-10">
          <a href={row.link} className="content">{row.content}</a>
        </div>
      </li>
    );
  });

  return (
    <ul className="container">
      {dataRow}
    </ul>
  );
}

export default ArticleRow;
