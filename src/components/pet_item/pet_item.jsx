import React from "react";
import styles from "./pet_item.module.css";
import { useHistory } from "react-router-dom";

const PetItem = ({ item, isOwner }) => {
  const history = useHistory();

  const goToPetInfo = () => {
    history.push({
      pathname: "/pet-item/pet-info",
      state: { item, isOwner },
    });
  };

  return (
    <li className={styles.pet_item} onClick={goToPetInfo}>
      <div className={styles.pet_wrap}>
        <img src={item.imgFilesUrl} alt="강아지" className={styles.pet_img} />
        <div className={styles.pet_text}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.name}>{`이름: ${item.name}`}</p>
          <p className={styles.breed}>{`견종: ${item.breed}`}</p>
          {/* <p className={styles.age}>{`나이: ${item.age}`}</p> */}
          <p className={styles.gender}>{`성별: ${item.gender}`}</p>
          {/* <p className={styles.weight}>{`무게: ${item.weight}`}</p> */}
        </div>
      </div>
    </li>
  );
};

export default PetItem;
