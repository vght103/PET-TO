import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PetItem from "../pet_item/pet_item";
import styles from "./pet_list.module.css";

const PetList = (props) => {
  const history = useHistory();
  const [click, setClick] = useState(false);

  const [pets, setPets] = useState([
    {
      id: "1",
      name: "아롱이",
      breed: "믹스견",
      age: "2",
      gender: "암컷",
      weight: "1kg",
      character: "굉장히 순하고 사람을 좋아해요!",
      img: null,
    },

    {
      id: "2",
      name: "삽사리",
      breed: "포메라니안",
      age: "3",
      gender: "암컷",
      weight: "10kg",
      character: "간식과 산책을 좋아하고 사람을 잘 따릅니다!",
      img: null,
    },

    {
      id: "3",
      name: "옥자",
      breed: "시바견",
      age: "2",
      gender: "수컷",
      weight: "3kg",
      character: "활발하고 터그놀이를 좋아해요!",
      img: null,
    },

    {
      id: "4",
      name: "순자",
      breed: "래브라도 리트리버",
      age: "3개월",
      gender: "수컷",
      weight: "1.5kg",
      character: "다른 반려견과 사이좋게 지내는 아이에요!",
      img: null,
    },
  ]);

  const goToAddItem = () => {
    history.push({
      pathname: "/add-pets",
      state: { pets },
    });
  };

  const handleClick = () => setClick(!click);
  console.log(click);

  return (
    <section className={styles.pet_list_wrap}>
      <ul className={styles.pet_list}>
        {pets.map((item) => (
          <PetItem key={item.id} item={item} />
        ))}
      </ul>

      <div className={styles.add_button}>
        <button className={styles.plus} onClick={handleClick}>
          <i className={"fas fa-plus fa-lg"}></i>
        </button>
        <ul className={styles.add_list}>
          <li
            className={
              click
                ? `${styles.add_item} ${styles.active}`
                : `${styles.add_item}`
            }
            onClick={goToAddItem}
          >
            <span> 글쓰기</span>
            <i className="fas fa-pen"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PetList;
