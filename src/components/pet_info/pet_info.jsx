import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "./pet_info.module.css";
import { useLocation } from "react-router";
import { dbService, storageService } from "../../service/firebase";

const PetInfo = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [click, setClick] = useState(false);

  const goToHome = () => {
    history.push("/pet-list");
  };

  const handleClick = () => {
    setClick(!click);
  };

  const onDeleteData = async () => {
    const ok = window.confirm("게시글을 삭제하시겠습니까?");
    if (ok) {
      await dbService.doc(`pets-list/${location.state.item.id}`).delete();
      await storageService.refFromURL(location.state.item.imgFilesUrl).delete();
      console.log(location.state.item.id);
    } else {
      return;
    }
    goToHome();
  };

  const onEditData = () => {};

  return (
    <section className={styles.pet_info}>
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
              <li onClick={onEditData}>게시글 수정</li>
              <li onClick={onDeleteData}>삭제</li>
            </ul>
          </div>
        )}
      </div>

      <img
        src={location.state.item.imgFilesUrl}
        alt={`${location.state.item.name} 사진입니다`}
        className={styles.pet_img}
      />
      <div className={styles.pet_detail}>
        <h3>{location.state.item.title}</h3>
        <ul className={styles.detail_info}>
          <li>
            <span>이름</span>
            <span>{location.state.item.name}</span>
          </li>
          <li>
            <span>견종</span>
            <span>{location.state.item.breed}</span>
          </li>
          <li>
            <span>나이</span>
            <span>{location.state.item.age}</span>
          </li>
          <li>
            <span>성별</span>
            <span>{location.state.item.gender}</span>
          </li>
          <li>
            <span>무게</span>
            <span>{location.state.item.weight}</span>
          </li>
          <li>
            <span className={styles.character}>성격</span>
            <p>{location.state.item.character}</p>
          </li>
        </ul>
      </div>
      <div className={styles.apply}>
        <button className={styles.apply_button}>임시보호 신청하기</button>
        {/* 삭제버튼 추가 필요 */}
      </div>
    </section>
  );
};

export default PetInfo;
