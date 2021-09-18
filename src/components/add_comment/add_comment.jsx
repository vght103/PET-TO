import React, { memo, useRef, useState } from "react";
import { firestoreService } from "../../service/firebase";
import styles from "./add_comment.module.css";

const AddComment = memo(({ userObj, contentItem, addedComment }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const buttonRef = useRef();

  const onSubmit = async () => {
    const ok = window.confirm("댓글을 등록하시겠습니까?");
    if (ok) {
      setLoading(true);
      const data = {
        createdAt: new Date(),
        creatorId: userObj.uid,
        creatorName: userObj.displayName,
        creatorPhoto: userObj.photoURL,
        commentText: inputRef.current.value,
        postId: contentItem.id,
      };
      let doc = await firestoreService.collection("comments-list").add(data);
      console.log(doc.id);
      data.id = doc.id;

      //새로운 댓글 추가
      addedComment(data);
    } else {
      return;
    }
    setLoading(false);
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
    <>
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
      {loading && <div className={styles.loading}></div>}
    </>
  );
});

export default AddComment;
