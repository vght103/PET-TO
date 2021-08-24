import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import PetItem from "../pet_item/pet_item";
import styles from "./pet_list.module.css";

const PetList = (props) => {
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
    {
      id: "5",
      name: "황구",
      breed: "골든 리트리버",
      age: "3개월",
      gender: "수컷",
      weight: "1.5kg",
      character: "다른 반려견과 사이좋게 지내는 아이에요!",
      img: null,
    },
    {
      id: "6",
      name: "두치",
      breed: "시츄",
      age: "3개월",
      gender: "수컷",
      weight: "1.5kg",
      character: "다른 반려견과 사이좋게 지내는 아이에요!",
      img: null,
    },
  ]);

  return (
    <section className={styles.pet_list_wrap}>
      <Header />

      <ul className={styles.pet_list}>
        {pets.map((item) => (
          <PetItem key={item.id} item={item} />
        ))}
      </ul>

      <Footer />
    </section>
  );
};

export default PetList;
