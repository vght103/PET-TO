import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { firestoreService, storageService } from "../../service/firebase";
import AddComment from "../add_comment/add_comment";
import CommentItem from "../comment_item/comment_item";
import styles from "./content_info.module.css";

const ContentInfo = ({ userObj }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  const location = useLocation();
  const [contentItem] = useState(location.state.item);

  // 댓글 불러오기

  // useEffect(() => {
  //   setLoading(true);
  //   firestoreService //
  //     .collection("comments-list")
  //     //글번호로 댓글검색
  //     .where("postId", "")
  //     .orderBy("createdAt", "desc")
  //     //데이터 한번만 가져오기
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const commentsArr = snapshot.val();
  //         console.log(commentsArr);
  //         setComments(commentsArr);
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    firestoreService //
      .collection("comments-list")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const commentsArr = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setComments(commentsArr);
      });
    setLoading(false);
  }, []);

  // 게시글 삭제
  const onDeleteData = async () => {
    setLoading(true);
    const ok = window.confirm("게시글을 삭제하시겠습니까?");

    if (ok) {
      await firestoreService.doc(`contents-list/${contentItem.id}`).delete();
      if (contentItem.imgFilesUrl) {
        await storageService.refFromURL(contentItem.imgFilesUrl).delete();
      }
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

      {/* 유저 닉네임 */}
      <div className={styles.info}>
        <span className={styles.info_category}>{contentItem.category}</span>
        <div className={styles.user}>
          <img
            src={contentItem.creatorPhoto}
            alt={`${contentItem.creatorName} 사진`}
            width="30px"
            height="30px"
            className={styles.user_img}
          />

          <span className={styles.user_name}>{contentItem.creatorName}</span>
        </div>
        <div className={styles.content}>
          <p>{contentItem.contentText}</p>
          <img src={contentItem.imgFilesUrl} alt="" />
        </div>
      </div>

      {/* 댓글 리스트 */}
      <div className={styles.comment_box}>
        <h4>댓글</h4>
        <ul className={styles.comments_ul}>
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              contentItem={contentItem}
            />
          ))}
        </ul>
      </div>

      {/* <div className={styles.add_comment}> */}
      <AddComment userObj={userObj} contentItem={contentItem} />
      {/* </div> */}

      {loading && <div className={styles.loading}></div>}
    </section>
  );
};

export default ContentInfo;
