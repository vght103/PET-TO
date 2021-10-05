import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PetItem from "../pet_item/pet_item";
import styles from "./pet_list.module.css";

const PetList = ({ userObj, getDataService }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [pets, setPets] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getDataService //
      .firstPetData()
      .then((res) => {
        setPets(res.petsArr);
        setLastKey(res.lastKey);
        setLoading(false);
      });
  }, [getDataService]);

  const fetchMoreData = (key) => {
    if (key > 0) {
      setLoading(true);
      getDataService //
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

  //무한 스크롤
  const handleScroll = (event) => {
    let scrollTop = event.target.scrollTop;
    let clientHeight = event.target.clientHeight;
    let scrollHeigth = event.target.scrollHeight;

    if (scrollTop + (clientHeight + 1) >= scrollHeigth) {
      fetchMoreData(lastKey);
    }
  };
  document.addEventListener("scroll", handleScroll);

  const goToAddPetForm = () => {
    history.push({ pathname: "/add-pets-form" });
  };

  const handleClick = () => setClick(!click);

  return (
    <section className={styles.home}>
      <div className={styles.pet_list_wrap} onScroll={handleScroll}>
        <div className={styles.banner}>
          <img src={process.env.PUBLIC_URL + "/imgs/banner.png"} alt="" />
        </div>

        <h4>임시보호&무료분양</h4>

        <ul className={styles.pet_list}>
          {pets.map((item) => (
            <PetItem
              key={item.id}
              item={item}
              isOwner={userObj.uid === item.creatorId}
            />
          ))}
        </ul>
      </div>

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
    </section>
  );
};

export default PetList;
