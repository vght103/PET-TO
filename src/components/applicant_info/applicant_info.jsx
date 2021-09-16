import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { firestoreService } from "../../service/firebase";
import styles from "./applicant_info.module.css";

const ApplicantInfo = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [applicantInfo] = useState(location.state);
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

  const goToAdmin = () => {
    history.push("/admin");
  };

  const handleClick = () => {
    setClick(!click);
  };

  const onCancelApplicant = async () => {
    const ok = window.confirm("게시글을 삭제하시겠습니까?");
    setLoading(true);
    if (ok) {
      await firestoreService
        .doc(`application-list/${applicantInfo.id}`)
        .delete();
    }
    setLoading(false);
    goToAdmin();
  };

  console.log(applicantInfo);
  return (
    <section className={styles.applicant}>
      <div className={styles.header}>
        <button className={styles.backspace} onClick={goToAdmin}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>신청자 상세정보</h2>
      </div>

      <div className={styles.applicant_box}>
        <div className={styles.applicant_info}>
          <ul className={styles.info_list}>
            <li>
              <span>Pet Id</span>
              <span>{location.state.petId}</span>
            </li>
            <li>
              <span> 이름</span>
              <span>{location.state.name}</span>
            </li>
            <li>
              <span>핸드폰</span>
              <span>{location.state.phone}</span>
            </li>
            <li>
              <span>이메일</span>
              <span>{location.state.email}</span>
            </li>
          </ul>
        </div>

        <div className={styles.applicant_answer}>
          <ul className={styles.answer_list}>
            <li>
              <span>현재 반려동물을 키우고 계신가요?</span>
              <p>{location.state.raise}</p>
            </li>

            <li>
              <span>반려동물을 키워보신 경험이 있으신가요?</span>
              <p>{location.state.experience}</p>
            </li>

            <li>
              <span>현재 거주하고 계신 거주지는 어디신가요?</span>
              <p>{location.state.region}</p>
            </li>

            <li>
              <span>반려동물과 함께 할 보호자가 2명 이상인가요??</span>
              <p>{location.state.protector}</p>
            </li>

            <li>
              <span>신청 사유</span>
              <p>{location.state.applicationText}</p>
            </li>
          </ul>
          <div className={styles.confirm_button}>
            <button
              className={
                click
                  ? `${styles.confirm} ${styles.active}`
                  : `${styles.confirm}`
              }
              onClick={handleClick}
            >
              {click ? <span>확인완료</span> : <span>신청확인</span>}
            </button>
            <button className={styles.cancel} onClick={onCancelApplicant}>
              신청취소
            </button>
          </div>
        </div>
      </div>
      {loading && <div className={styles.loading}></div>}
    </section>
  );
};

export default ApplicantInfo;
