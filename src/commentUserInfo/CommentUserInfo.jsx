import React from "react";
import "./CommentUserInfo.css";

const CommentUserInfo = (props) => {
  return (
    <div className="UserInfo">
      <img className="Avatar" src={props.avatarUrl} alt={props.name} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
};

export default CommentUserInfo;
