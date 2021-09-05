import React from "react";
import { useHistory } from "react-router";
import styles from "./content.module.css";

const Content = ({ item, userObj, isOwner }) => {
  const history = useHistory();
  const goToContentInfo = () => {
    history.push({
      pathname: "/contents-list/content-info",
      state: { item, isOwner },
    });
  };

  return (
    <>
      <li className={styles.content_item} onClick={goToContentInfo}>
        <div className={styles.content_wrap}>
          <div className={styles.content_info}>
            <p className={styles.category}>{item.category}</p>
            <p className={styles.content_text}>{item.contentText}</p>
          </div>
          {item.imgFilesUrl && (
            <img
              src={item.imgFilesUrl}
              alt="gd"
              className={styles.content_img}
            />
          )}
          <div>
            <span className={styles.user_name}>{userObj.displayName}</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default Content;
