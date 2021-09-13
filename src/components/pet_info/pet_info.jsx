import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./pet_info.module.css";
import { useLocation } from "react-router";
import { firestoreService, storageService } from "../../service/firebase";

const PetInfo = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [petInfo, setPetInfo] = useState(location.state.item);
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

  const goToHome = () => {
    history.push("/pet-list");
  };

  const goToSurvey = () => {
    const ok = window.confirm("임시보호 신청을 하시겠습니까?");
    ok &&
      history.push({
        pathname: "/peto-application",
        state: petInfo,
      });
  };

  const handleClick = () => {
    setClick(!click);
  };

  const onDeleteData = async () => {
    setLoading(true);

    const ok = window.confirm("게시글을 삭제하시겠습니까?");
    if (ok) {
      await firestoreService.doc(`pets-list/${petInfo.id}`).delete();

      if (petInfo.imgFilesUrl) {
        await storageService.refFromURL(petInfo.imgFilesUrl).delete();
      }

      setLoading(false);
    } else {
      return;
    }

    goToHome();
  };

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
              {/* <li onClick={onEditData}>게시글 수정</li> */}
              <li onClick={onDeleteData}>삭제</li>
            </ul>
          </div>
        )}
      </div>

      <img
        src={petInfo.imgFilesUrl}
        alt={`${petInfo.name} 사진입니다`}
        className={styles.pet_img}
      />
      <div className={styles.pet_detail}>
        <h3>{petInfo.title}</h3>
        <ul className={styles.detail_info}>
          <li>
            <span>NO</span>
            <span>{petInfo.createAt.seconds}</span>
          </li>
          <li>
            <span>이름</span>
            <span>{petInfo.name}</span>
          </li>
          <li>
            <span>견종</span>
            <span>{petInfo.breed}</span>
          </li>
          <li>
            <span>나이</span>
            <span>{petInfo.age}</span>
          </li>
          <li>
            <span>성별</span>
            <span>{petInfo.gender}</span>
          </li>
          <li>
            <span>무게</span>
            <span>{petInfo.weight}</span>
          </li>
          <li>
            <span className={styles.character}>성격</span>
            <p>{petInfo.character}</p>
          </li>
        </ul>
      </div>
      <div className={styles.apply}>
        <button className={styles.apply_button} onClick={goToSurvey}>
          임시보호 신청하기
        </button>
        {/* 삭제버튼 추가 필요 */}
      </div>
      {loading && <div className={styles.loading}></div>}
    </section>
  );
};

export default PetInfo;
