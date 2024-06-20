import React from "react";

const NewsItem = ({ title, date }) => {
  return (
    <div className="news-item">
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
};

export default NewsItem;
