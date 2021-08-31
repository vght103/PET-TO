import React from "react";
import { useHistory } from "react-router";
import styles from "./pet_info.module.css";

const PetInfo = ({ location }) => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/pet-list");
  };

  return (
    <section className={styles.add_content}>
      <div className={styles.title}>
        <button className={styles.cancel} onClick={goToHome}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>PET 정보</h2>
      </div>

      <img
        src={process.env.PUBLIC_URL + "/imgs/dog3.jpg"}
        alt={`${location.state.name} 사진입니다`}
        className={styles.pet_img}
      />
      <div className={styles.pet_info}>
        <p>{`이름 : ${location.state.name}`}</p>
        <p>{`견종 : ${location.state.breed}`}</p>
        <p>{`나이 : ${location.state.age}`}</p>
        <p>{`성별 : ${location.state.gender}`}</p>
        <p>{`무게 : ${location.state.weight}`}</p>
        <p>{`성격 : ${location.state.character}`}</p>
      </div>
      <div className={styles.apply}>
        <button className={styles.apply_button}>임시보호 신청하기</button>
        {/* 삭제버튼 추가 필요 */}
      </div>
    </section>
  );
};

export default PetInfo;
