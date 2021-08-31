import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/navbar";

import styles from "./my_info.module.css";

const MyInfo = ({ authService }) => {
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
    <section className={styles.my_info}>
      <div className={styles.logout}>
        <button className={styles.logout_button} onClick={onLogout}>
          로그아웃
        </button>
      </div>
      <h2>{userInfo.displayName}</h2>
      <Navbar />
    </section>
  );
};

export default MyInfo;
