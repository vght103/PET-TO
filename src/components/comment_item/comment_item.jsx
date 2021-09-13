import React, { useEffect, useState } from "react";
import styles from "./comment_item.module.css";

const CommentItem = ({ comment, contentItem }) => {
  const [isVaild, setIsVaild] = useState(false);

  useEffect(() => {
    const postId = comment.postId;
    const contentId = contentItem.id;
    if (postId === contentId) {
      setIsVaild(true);
    }
  }, []);

  return (
    <>
      {isVaild && (
        <li className={styles.comment_list}>
          <span className={styles.comment_writer}>{comment.creatorName}</span>
          <p className={styles.commentText}>{comment.commentText}</p>
        </li>
      )}
    </>
  );
};

export default CommentItem;
