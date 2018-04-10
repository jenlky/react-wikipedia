import React from "react";

const Article = (props) => {
  console.log(props);

  const title = props.titles.map(title => {
    return (
      <p className="title">{title}</p>
    );
  });

  const content = props.contents.map(content => {
    return (
      <div className="content">
        <a href={link}>{content}</a>
      </div>
    );
  });

  const link = props.links.map(link => {
    return link;
  });

  return (
    <div className="container container--spacing container--font">
      <div className="">
        <span className="col-1">Article title</span>
        <span className="col-11">Snippet (click to view article)</span>
      </div>
      <div className="title__container">{title}</div>
      <div className="content__container">{content}</div>
    </div>
  );
}

export default Article;
