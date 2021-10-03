import React from "react";
import { useHistory } from "react-router";
import styles from "./search_result.module.css";

const SearchResult = ({ data, isOwner }) => {
  const history = useHistory;

  const goToPetInfo = () => {
    history.push({
      pathname: "/pet-item/pet-info",
      state: { data, isOwner },
    });
  };

  return (
    <li className={styles.pet_item} onClick={goToPetInfo}>
      <div className={styles.pet_wrap}>
        <img src={data.imgFilesUrl} alt="강아지" className={styles.pet_img} />
        <div className={styles.pet_text}>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.name}>{`이름: ${data.name}`}</p>
          <p className={styles.breed}>{`견종: ${data.breed}`}</p>
          <p className={styles.gender}>{`성별: ${data.gender}`}</p>
        </div>
      </div>
    </li>
  );
};

export default SearchResult;
