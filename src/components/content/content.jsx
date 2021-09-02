import React from "react";
import styles from "./content.module.css";

const Content = ({ item }) => {
  console.log(item);
  return (
    <li className={styles.content_item}>
      <div className={styles.content_wrap}>
        <img
          src={process.env.PUBLIC_URL + "/imgs/dog1.jpg"}
          alt="강아지"
          className={styles.content_img}
        />
        <div className={styles.content_text}>
          <p className={styles.category}>{item.category}</p>
          <p className={styles.breed}>{item.contentText}</p>
        </div>
      </div>
    </li>
  );
};

export default Content;
