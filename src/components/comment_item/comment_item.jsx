import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { firestoreService } from "../../service/firebase";
import styles from "./comment_item.module.css";

const CommentItem = ({ comment, isOwner }) => {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createdTime, setCreatedTime] = useState(null);

  useEffect(() => {
    const dateTime = comment.createdAt.toDate();
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, "0");
    const date = String(dateTime.getDate()).padStart(2, "0");
    const hours = String(dateTime.getHours()).padStart(2, "0");
    const minutes = String(dateTime.getMinutes()).padStart(2, "0");
    setCreatedTime(`${year}.${month}.${date} ${hours}:${minutes}`);
  }, [comment]);

  console.log(comment);

  const onDeleteData = async () => {
    setLoading(true);

    const ok = window.confirm("게시글을 삭제하시겠습니까?");
    if (ok) {
      await firestoreService.doc(`comments-list/${comment.id}`).delete();
      window.location.reload();
      setLoading(false);
    } else {
      setLoading(false);
      return;
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <li className={styles.comment_list}>
        <div className={styles.writer_info}>
          <img src={comment.creatorPhoto} alt={comment.creatorPhoto} />
          <div>
            <span className={styles.writer_name}>{comment.creatorName}</span>
            <span className={styles.date}>{createdTime}</span>
          </div>
          {isOwner ? (
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
                <li>수정</li>
                <li onClick={onDeleteData}>삭제</li>
              </ul>
            </>
          ) : (
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
                <li>신고하기</li>
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
