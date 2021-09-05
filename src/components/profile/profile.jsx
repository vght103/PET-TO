import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/navbar";
import styles from "./profile.module.css";

const Profile = ({ authService }) => {
  const [userInfo, setUserInfo] = useState("");
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
    history.push("/");
    console.log("로그아웃 완료");
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserInfo(user);
      } else {
        history.push("/");
      }
    });
  }, []);

  console.log(userInfo);

  return (
    <section className={styles.profile}>
      <div className={styles.user_info}>
        <ul className={styles.info_li}>
          <li>
            <span>이름</span>
            <span>{userInfo.displayName}</span>
          </li>
          <li>
            <span>이메일</span>
            <span>{userInfo.email}</span>
          </li>
        </ul>

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
