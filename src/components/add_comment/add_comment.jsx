import React, { useEffect, useRef, useState } from "react";
import { firestoreService } from "../../service/firebase";
import styles from "./add_comment.module.css";

const AddComment = ({ userObj, getDataService }) => {
  const [comments, setComments] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [loding, setLoading] = useState(false);

  const inputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    firestoreService //
      .collection("comments-list")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        const commentsArr = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          lastContent: doc.data().createdAt,
        }));
        setLastKey(comments.lastContent);
        setComments(commentsArr);
      });
  }, []);

  const onSubmit = async () => {
    const ok = window.confirm("댓글을 등록하시겠습니까?");
    if (ok) {
      await firestoreService.collection("comments-list").add({
        createdAt: new Date(),
        creatorId: userObj.uid,
        creatorName: userObj.displayName,
        creatorPhoto: userObj.photoURL,
        commentText: inputRef.current.value,
      });
    } else {
      return;
    }
  };

  const commentClick = (event) => {
    event.preventDefault();
    commentResult();
    onSubmit();

    inputRef.current.value = null;
  };

  const commentEnter = (event) => {
    if (event.key === "Enter") {
      commentResult();
      onSubmit();
      inputRef.current.value = null;
    }
  };

  const commentResult = () => {
    const inputText = inputRef.current.value;
    if (!inputText) {
      return;
    }
  };

  return (
    <div className={styles.comment_container}>
      <h4>댓글</h4>

      <ul className={styles.comments_ul}>
        {comments.map((comment) => (
          <li key={comment.id} className={styles.comment_list}>
            <span className={styles.comment_writer}>{comment.creatorName}</span>
            <p className={styles.commentText}>{comment.commentText}</p>
          </li>
        ))}
      </ul>
      <div className={styles.comment_input_box}>
        <input
          ref={inputRef}
          placeholder="댓글을 입력해주세요"
          onKeyPress={commentEnter}
          className={styles.comment_input}
        />
        <button
          ref={buttonRef}
          className={`${styles.comment_button}`}
          onClick={commentClick}
        >
          <i className="fas fa-arrow-right fa-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default AddComment;
