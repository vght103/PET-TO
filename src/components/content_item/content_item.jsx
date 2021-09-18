import React from "react";
import { useHistory } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import styles from "./content_item.module.css";

const ContentItem = ({ item, isOwner }) => {
  const history = useHistory();
  // const [createdTime, setCreatedTime] = useState(null);

  // useEffect(() => {
  //   const dateTime = item.createdAt.toDate();
  //   const year = dateTime.getFullYear();
  //   const month = String(dateTime.getMonth() + 1).padStart(2, "0");
  //   const date = String(dateTime.getDate()).padStart(2, "0");
  //   const hours = String(dateTime.getHours()).padStart(2, "0");
  //   const minutes = String(dateTime.getMinutes()).padStart(2, "0");
  //   setCreatedTime(`${year}.${month}.${date} ${hours}:${minutes}`);
  // }, [item]);

  const goToContentInfo = () => {
    history.push({
      pathname: "/contents-list/content-info",
      state: { item, isOwner },
    });
  };

  return (
    <li className={styles.content_item} onClick={goToContentInfo}>
      <div className={styles.content_wrap}>
        <div className={styles.content_info}>
          <span className={styles.category}>{item.category}</span>
          {/* <span>{createdTime}</span> */}
          <p className={styles.content_text}>{item.contentText}</p>
        </div>
        {item.imgFilesUrl && (
          <img src={item.imgFilesUrl} alt="gd" className={styles.content_img} />
        )}
        <div>
          <span className={styles.user_name}>{item.creatorName}</span>
        </div>
      </div>
    </li>
  );
};

export default ContentItem;
