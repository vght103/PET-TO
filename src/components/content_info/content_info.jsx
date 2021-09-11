import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { firestoreService, storageService } from "../../service/firebase";
import styles from "./content_info.module.css";

const ContentInfo = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const buttonRef = useRef();
  const textRef = useRef();

  const goToCommunity = () => {
    history.push("/contents-list");
  };

  const handleClick = () => {
    setClick(!click);
  };

  const onDeleteData = async () => {
    setLoading(true);
    const ok = window.confirm("게시글을 삭제하시겠습니까?");

    if (ok) {
      await firestoreService
        .doc(`contents-list/${location.state.item.id}`)
        .delete();
      await storageService.refFromURL(location.state.item.imgFilesUrl).delete();
    } else {
      return;
    }
    setLoading(false);
    goToCommunity();
  };

  const commentClick = (event) => {
    event.preventDefault();
    commentResult();
  };
  const commentEnter = (event) => {
    if (event.key === "Enter") {
      commentResult();
    }
  };

  const commentResult = () => {
    const inputText = inputRef.current.value;
    if (!inputText) {
      return;
    }
    setComment(inputText);
    // setComment(null);
  };

  return (
    <section>
      <div className={styles.header}>
        <button className={styles.cancel} onClick={goToCommunity}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>컨텐츠 정보</h2>

        {location.state.isOwner && (
          <div className={styles.menu}>
            <div className={styles.menu_button} onClick={handleClick}>
              <i className="fas fa-bars fa-lg"></i>
            </div>
            <ul
              className={
                click
                  ? `${styles.menu_list} ${styles.active}`
                  : `${styles.menu_list}`
              }
            >
              <li onClick={onDeleteData}>삭제</li>
            </ul>
          </div>
        )}
      </div>

      <div className={styles.info}>
        <span className={styles.info_category}>{location.state.category}</span>
        <div className={styles.user}>
          <img
            src={location.state.item.creatorPhoto}
            alt={`${location.state.item.creatorName} 사진`}
            width="30px"
            height="30px"
            className={styles.user_img}
          />

          <span className={styles.user_name}>
            {location.state.item.creatorName}
          </span>
        </div>
        <div className={styles.content}>
          <p>{location.state.item.contentText}</p>
          <img src={location.state.item.imgFilesUrl} alt="" />
        </div>
      </div>

      <div className={styles.comment_container}>
        <h4>댓글</h4>
        <div>
          {comment && (
            <div className={styles.uploaded_comment}>
              <span className={styles.comment_writer}>
                {location.state.item.creatorName}
              </span>
              <p ref={textRef} className={styles.comment_text}>
                {comment}
              </p>
            </div>
          )}
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
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      {loading && <div className={styles.loading}></div>}
    </section>
  );
};

export default ContentInfo;
