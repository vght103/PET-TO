import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/navbar";
import styles from "./profile.module.css";

const Profile = ({ authService, userObj }) => {
  const [admin, setAdmin] = useState(null);

  const history = useHistory();

  useEffect(() => {
    setAdmin("FNv4KYNBQeVaW1iGJp12RME2yVC3");
  }, []);

  const onLogout = () => {
    authService.logout();
    history.push("/");
    console.log("로그아웃 완료");
  };

  return (
    <section className={styles.profile}>
      <div className={styles.user_info}>
        <ul className={styles.info_li}>
          <li>
            <span>이름</span>
            <span>{userObj.displayName}</span>
          </li>
          <li>
            <span>이메일</span>
            <span>{userObj.email}</span>
          </li>
        </ul>

        <div className={styles.survey}>
          <span>임시보호 신청자</span>
        </div>

        <div className={styles.logout}>
          <button className={styles.logout_button} onClick={onLogout}>
            로그아웃
          </button>
        </div>
      </div>

      <div className={styles.navbar}>
        <Navbar />
      </div>
    </section>
  );
};

export default Profile;
