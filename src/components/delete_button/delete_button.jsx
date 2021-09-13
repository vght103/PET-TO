import React, { useState } from "react";
import { useHistory } from "react-router";
import { firestoreService, storageService } from "../../service/firebase";
import styles from "./delete_button.module.css";

const DeleteButton = ({ contentItem }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <div className={styles.menu}>
      <div className={styles.menu_button} onClick={handleClick}>
        <i className="fas fa-bars fa-lg"></i>
      </div>
      <ul
        className={
          click ? `${styles.menu_list} ${styles.active}` : `${styles.menu_list}`
        }
      >
        <li onClick={onDeleteData}>삭제</li>
      </ul>
    </div>
  );
};

export default DeleteButton;
