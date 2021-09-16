import React, { useState } from "react";
import { firestoreService } from "../../service/firebase";
import styles from "./comment_item.module.css";

const CommentItem = ({ comment, isOwner }) => {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDeleteData = async () => {
    setLoading(true);

    const ok = window.confirm("게시글을 삭제하시겠습니까?");
    if (ok) {
      await firestoreService.doc(`comments-list/${comment.id}`).delete();

      setLoading(false);
    } else {
      return;
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

  console.log(comment);

  return (
    <li className={styles.comment_list}>
      <img src={comment.creatorPhoto} alt="" />
      <div>
        <span className={styles.comment_writer}>{comment.creatorName}</span>

        <p className={styles.commentText}>{comment.commentText}</p>
      </div>

      {isOwner && (
        <div className={styles.menu}>
          <div className={styles.menu_button} onClick={handleClick}>
            <i className="fas fa-ellipsis-v"></i>
          </div>
          <ul
            className={
              click
                ? `${styles.menu_list} ${styles.active}`
                : `${styles.menu_list}`
            }
          >
            {/* <li onClick={onEditData}>게시글 수정</li> */}
            <li onClick={onDeleteData}>삭제</li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default CommentItem;
