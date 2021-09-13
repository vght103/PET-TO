import React from "react";

const CommentItem = ({ comment }) => {
  console.log(comment);
  return (
    <>
      <li>{comment.commentText}</li>
    </>
  );
};

export default CommentItem;
