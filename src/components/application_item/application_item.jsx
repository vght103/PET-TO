import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./application_item.module.css";

const ApplicationItem = ({ item }) => {
  const history = useHistory();

  const [check, setCheck] = useState();

  const goToDetail = () => {
    history.push({
      pathname: "/applicant-info",
      state: item,
    });
  };

  return (
    <li className={styles.pet_item} onClick={goToDetail}>
      <div className={styles.pet_wrap}>
        <img src={item.petPhoto} alt="강아지 사진" className={styles.pet_img} />
        <div className={styles.pet_text}>
          <p className={styles.pet_id}>{`Pet No: ${item.petId}`}</p>
          <p className={styles.name}>{`이름: ${item.name}`}</p>
          <p className={styles.gender}>{`지역: ${item.region}`}</p>
        </div>
      </div>
    </li>
  );
};

export default ApplicationItem;
