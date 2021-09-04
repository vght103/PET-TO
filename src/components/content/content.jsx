import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./content.module.css";

const Content = ({ item, userObj }) => {
  const [imgFile, setImgFile] = useState(item.img);
  console.log(imgFile);

  const history = useHistory();
  const goToContentInfo = () => {
    history.push({
      pathname: "/contents-list/content-info",
      state: item,
      userObj,
    });
  };

  console.log(userObj);
  return (
    <>
      <li className={styles.content_item} onClick={goToContentInfo}>
        <div className={styles.content_wrap}>
          <div className={styles.content_info}>
            <p className={styles.category}>{item.category}</p>
            <p className={styles.content_text}>{item.contentText}</p>
          </div>
          {imgFile && (
            <img src={imgFile} alt="강아지" className={styles.content_img} />
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
