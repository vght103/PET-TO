import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dbService } from "../../service/firebase";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import PetItem from "../pet_item/pet_item";
import styles from "./pet_list.module.css";

const PetList = ({ authService }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [pets, setPets] = useState([]);

  const getPets = async () => {
    const dbPets = await dbService.collection("pets-list").get();
    dbPets.forEach((document) => {
      const petsObj = {
        ...document.data(),
        id: document.id,
      };
      setPets((prev) => [petsObj, ...prev]);
    });
  };

  useEffect(() => {
    getPets();
  }, []);

  // useEffect(() => {
  //   authService.onAuthChanged((user) => {
  //     if (user) {
  //       setUserId(user.uid);
  //     } else {
  //       history.push("/");
  //     }
  //   });
  // });

  // const onAddPet = (newPet) => {
  //   setPets((pets) => {
  //     const updated = [...pets, newPet];
  //     updated[newPet.id] = newPet;
  //     console.log("생성됐다");
  //     return updated;
  //   });
  // };

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
          <PetItem key={item.id} item={item} />
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
