import React from "react";
import styles from "./pet_item.module.css";
import { useHistory } from "react-router-dom";

const PetItem = ({ item }) => {
  const history = useHistory();

  const goToPetInfo = () => {
    history.push({
      pathname: "/pet-item/pet-info",
      item: item,
    });
  };

  return (
    <>
      <li className={styles.pet_item} onClick={goToPetInfo}>
        <div className={styles.pet_wrap}>
          <img
            src={process.env.PUBLIC_URL + "/imgs/dog1.jpg"}
            alt="강아지"
            className={styles.pet_img}
          />
          <div className={styles.pet_text}>
            <p className={styles.name}>{`이름: ${item.name}`}</p>
            <p className={styles.breed}>{`태생: ${item.breed}`}</p>
            <p className={styles.age}>{`나이: ${item.age}`}</p>
            <p className={styles.gender}>{`성별: ${item.gender}`}</p>
            <p className={styles.weight}>{`무게: ${item.weight}`}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default PetItem;
