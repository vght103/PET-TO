import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dbService } from "../../service/firebase";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import PetItem from "../pet_item/pet_item";
import styles from "./pet_list.module.css";

const PetList = ({ userObj }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // getPets();
    // onSnapshot 방법 - real time 방법
    // forEach 를 사용하는 것보다 매번 Rerender 되지 않아서 이 방법이 많이 선호
    dbService.collection("pets-list").onSnapshot((snapshot) => {
      const dbPets = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPets(dbPets);
    });
  }, []);

  const goToAddPetForm = () => {
    history.push({ pathname: "/add-pets-form" });
  };

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <section className={styles.pet_list_wrap}>
      <Header />
      <ul className={styles.pet_list}>
        {pets.map((item) => (
          <PetItem
            key={item.id}
            item={item}
            isOwner={userObj.uid === item.creatorId}
          />
        ))}
      </ul>

      <div className={styles.add_button}>
        <button className={styles.plus} onClick={handleClick}>
          <i className={"fas fa-plus fa-lg"}></i>
        </button>
        <ul className={styles.add_list}>
          <li
            onClick={goToAddPetForm}
            className={
              click
                ? `${styles.add_item} ${styles.active}`
                : `${styles.add_item}`
            }
          >
            <span> 글쓰기</span>
            <i className="fas fa-pen"></i>
          </li>
        </ul>
      </div>
      <Navbar />
    </section>
  );
};

export default PetList;
