import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "./content_item.module.css";

const ContentItem = ({ item, isOwner }) => {
  const history = useHistory();
  const [createdTime, setCreatedTime] = useState();

  useEffect(() => {
    const dateTime = item.createdAt.toDate();
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth() + 1;
    const date = dateTime.getDate();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    setCreatedTime(`${year}.${month}.${date} ${hours}:${minutes}`);
  }, [item]);

  // useEffect(() => {
  //   console.log(item.createdAt.toDate().toISOString());
  //   const dateTime = item.createdAt.toDate().toISOString();
  //   setCreatedTime(dateTime);
  //   console.log(createdTime);
  // }, [createdTime]);

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
          <span>{createdTime}</span>
        </div>
      </div>
    </li>
  );
};

export default ContentItem;
