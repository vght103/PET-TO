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
      window.location.reload();
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
    <>
      <li className={styles.comment_list}>
        <div className={styles.writer_info}>
          <img src={comment.creatorPhoto} alt="" />
          <span className={styles.writer_name}>{comment.creatorName}</span>
          {isOwner && (
            <>
              <button className={styles.menu_button} onClick={handleClick}>
                <i className="fas fa-ellipsis-v"></i>
              </button>
              <ul
                className={
                  click
                    ? `${styles.menu_list} ${styles.active}`
                    : `${styles.menu_list}`
                }
              >
                {/* <li onClick={onEditData}>게시글 수정</li> */}
                <li onClick={onDeleteData}>삭제</li>
                <li onClick={onDeleteData}>수정</li>
              </ul>
            </>
          )}
        </div>
        <p className={styles.commentText}>{comment.commentText}</p>
      </li>
      {loading && <div className={styles.loading}></div>}
    </>
  );
};

export default CommentItem;
