import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { dbService, storageService } from "../../service/firebase";
import styles from "./content_info.module.css";

const ContentInfo = ({ userObj }) => {
  const location = useLocation();
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [coment, setComent] = useState(null);

  const inputRef = useRef();
  const buttonRef = useRef();
  const labelRef = useRef();

  const goToCommunity = () => {
    history.push("/contents-list");
  };

  const handleClick = () => {
    setClick(!click);
  };

  const onDeleteData = async () => {
    const ok = window.confirm("게시글을 삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`contents-list/${location.state.item.id}`).delete();
      await storageService.refFromURL(location.state.item.imgFilesUrl).delete();
    } else {
      return;
    }
    goToCommunity();
  };

  const commentClick = (event) => {
    event.preventDefault();
    commentResult();
  };
  const commentEnter = (event) => {
    if (event.Key === "Enter") {
      commentResult();
    }
  };

  const commentResult = () => {
    const inputText = inputRef.current.value;
    if (!inputText) {
      return;
    }
    setComent(inputText);

    console.log(inputText);
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
            src={userObj.photoURL}
            alt={`${userObj.displayName} 사진`}
            width="30px"
            height="30px"
            className={styles.user_img}
          />
          <span className={styles.user_name}>{userObj.displayName}</span>
        </div>
        <div className={styles.content}>
          <p>{location.state.item.contentText}</p>
          <img src={location.state.item.imgFilesUrl} alt="" />
        </div>
      </div>

      <div className={styles.comment}>
        <h4>댓글</h4>
        <div>
          <input
            ref={inputRef}
            type="text"
            className={styles.comment_input}
            onKeyPress={commentEnter}
          />
          <button
            ref={buttonRef}
            className={styles.comment_button}
            onClick={commentClick}
          >
            작성
          </button>
        </div>
        <span className={styles.comment_writer}>{userObj.displayName}</span>
        <label ref={labelRef} className={styles.comment_label}>
          {coment}
        </label>
      </div>
    </section>
  );
};

export default ContentInfo;
