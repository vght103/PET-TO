import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "./pet_info.module.css";
import { useLocation } from "react-router";

const PetInfo = ({ userObj }) => {
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const [click, setClick] = useState(false);
  // const [isOwner, setIsOwner] = useState(false);

  const goToHome = () => {
    history.push("/pet-list");
  };

  // console.log(userObj);
  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };

  // useEffect(() => {
  //   setIsOwner(userObj.uid === location.state.item.creatorId);
  // }, []);

  // console.log(isOwner);

  return (
    <section className={styles.add_content}>
      <div className={styles.header}>
        <button className={styles.cancel} onClick={goToHome}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>PET 정보</h2>

        {location.state.isOwner && (
          <div className={styles.menu}>
            <div className={styles.menu_button} onClick={handleClick}>
              <i className="fas fa-bars fa-lg"></i>
            </div>
            <ul
              className={
                click
                  ? `${styles.menu_list} ${styles.active}`
                  : `${styles.menu_list}`
              }
            >
              <li>게시글 수정</li>
              <li>삭제</li>
            </ul>
          </div>
        )}
      </div>

      <img
        src={process.env.PUBLIC_URL + "/imgs/dog3.jpg"}
        alt={`${location.state.name} 사진입니다`}
        className={styles.pet_img}
      />
      <div className={styles.pet_info}>
        <p>{`이름 : ${location.state.item.name}`}</p>
        <p>{`견종 : ${location.state.item.breed}`}</p>
        <p>{`나이 : ${location.state.item.age}`}</p>
        <p>{`성별 : ${location.state.item.gender}`}</p>
        <p>{`무게 : ${location.state.item.weight}`}</p>
        <p>{`성격 : ${location.state.item.character}`}</p>
      </div>
      <div className={styles.apply}>
        <button className={styles.apply_button}>임시보호 신청하기</button>
        {/* 삭제버튼 추가 필요 */}
      </div>
    </section>
  );
};

export default PetInfo;
