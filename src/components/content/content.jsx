import React from "react";
import { useHistory } from "react-router";
import styles from "./content.module.css";

const Content = ({ item }) => {
  const history = useHistory();

  return (
    <li className={styles.content_item}>
      <div className={styles.content_wrap}>
        <img
          src={process.env.PUBLIC_URL + "/imgs/dog1.jpg"}
          alt="강아지"
          className={styles.content_img}
        />
        <div className={styles.content_text}>
          <p className={styles.name}>{`이름: ${item.name}`}</p>
          <p className={styles.breed}>{`태생: ${item.breed}`}</p>
          <p className={styles.age}>{`나이: ${item.age}`}</p>
          <p className={styles.gender}>{`성별: ${item.gender}`}</p>
          <p className={styles.weight}>{`무게: ${item.weight}`}</p>
        </div>
      </div>
    </li>
  );
};

export default Content;
