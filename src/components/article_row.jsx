import React from "react";

const ArticleRow = ({dataArray}) => {
  const dataRow = dataArray.map(row => {
    console.log(row.title);
    return (
      <tr key={row.title}>
        <td className="title">{row.title}</td>
        <td className="content__div">
          <a href={row.link} className="content">{row.content}</a>
        </td>
      </tr>
    );
  });

  return (
    <table className="data-table">
      <tbody>
        {dataRow}
      </tbody>
    </table>
  );
}

export default ArticleRow;
