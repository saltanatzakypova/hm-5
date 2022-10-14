import React from "react";
import "./CommentDate.css";

const CommentDate = (props) => {
  function formatDate(date) {
    return date.toLocaleDateString();
  }
  return <div className="Comment-date">{formatDate(props.date)}</div>;
};

export default CommentDate;
