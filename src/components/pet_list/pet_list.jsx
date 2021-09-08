import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import PetItem from "../pet_item/pet_item";
import styles from "./pet_list.module.css";

const PetList = ({ userObj, dataService }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [pets, setPets] = useState([]);
  // const [nextPets, setNextPets] = useState(false);
  const [lastKey, setLastKey] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    dataService //
      .firstPetData()
      .then((res) => {
        setPets(res.petsArr);
        setLastKey(res.lastKey);
        setLoading(false);
      });
  }, [dataService]);

  const fetchMoreData = (key) => {
    console.log("hi");
    if (key > 0) {
      setLoading(true);
      dataService //
        .nextPetsData(key)
        .then((res) => {
          setLastKey(res.lastKey);
          setPets(pets.concat(res.petsArr));
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  const goToAddPetForm = () => {
    history.push({ pathname: "/add-pets-form" });
  };

  const handleClick = () => setClick(!click);

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
      {loading && <div className={styles.loading}></div>}
      {lastKey > 0 ? (
        <button onClick={() => fetchMoreData(lastKey)}>다시해보자</button>
      ) : (
        <span>이제없나??</span>
      )}

      <Navbar />
    </section>
  );
};

export default PetList;
