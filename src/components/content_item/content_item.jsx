import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import LikeButton from "../like_button/like_button";
import styles from "./content_item.module.css";

const ContentItem = ({ item, isOwner }) => {
  const history = useHistory();
  const [createdTime, setCreatedTime] = useState();
  useEffect(() => {
    const dateTime = item.createdAt.toDate();
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, "0");
    const date = String(dateTime.getDate()).padStart(2, "0");
    const hours = String(dateTime.getHours()).padStart(2, "0");
    const minutes = String(dateTime.getMinutes()).padStart(2, "0");
    setCreatedTime(`${year}.${month}.${date} ${hours}:${minutes}`);
  }, [item.createdAt]);

  const goToContentInfo = () => {
    history.push({
      pathname: "/content-item/content-info",
      state: { item, isOwner, createdTime },
    });
  };

  return (
    <>
      <li className={styles.content_item}>
        <div className={styles.content_wrap} onClick={goToContentInfo}>
          <div className={styles.content_info}>
            <span className={styles.category}>{item.category}</span>
            <span>{createdTime}</span>
            <p className={styles.content_text}>{item.contentText}</p>
          </div>
          <ul className={styles.img_list}>
            {item.imgFilesUrls &&
              item.imgFilesUrls.map((photo) => (
                <li key={photo}>
                  <img src={photo} alt="gd" className={styles.content_img} />
                </li>
              ))}
          </ul>
          <div className={styles.content_footer}>
            <span className={styles.user_name}>{item.creatorName}</span>
            <LikeButton />
          </div>
        </div>
      </li>
    </>
  );
};

export default ContentItem;
