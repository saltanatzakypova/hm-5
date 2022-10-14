import React from "react";
import CommentDate from "../commentDate/CommentDate";
import CommentUserInfo from "../commentUserInfo/CommentUserInfo";
import CommentWrapper from "../commentWrapper/CommentWrapper";
import "./Comment.css";

const Comment = (props) => {
  return (
    <div>
      <CommentWrapper>
        <CommentUserInfo
          avatarUrl={props.data.author.avatarUrl}
          name={props.data.author.name}
        ></CommentUserInfo>
      </CommentWrapper>


      <CommentWrapper>
        <div className="Comment-text">{props.data.text}</div>
        <CommentDate date={props.data.date}></CommentDate>
      </CommentWrapper>
    </div>
  );
};

export default Comment;
