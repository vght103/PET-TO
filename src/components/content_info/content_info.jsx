import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { firestoreService, storageService } from "../../service/firebase";
import AddComment from "../add_comment/add_comment";
import styles from "./content_info.module.css";

const ContentInfo = ({ userObj, getDataService }) => {
  const location = useLocation();
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [comments, setComments] = useState([]);

  // 댓글 불러오기

  // 게시글 삭제
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

  const goToCommunity = () => {
    history.push("/contents-list");
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <section className={styles.content_info}>
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

      {/* <div className={styles.add_comment}> */}
      <AddComment userObj={userObj} getDataService={getDataService} />
      {/* </div> */}

      {loading && <div className={styles.loading}></div>}
    </section>
  );
};

export default ContentInfo;
