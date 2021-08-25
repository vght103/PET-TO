import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./my_info.module.css";

const MyInfo = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
    history.push("/");
    console.log("로그아웃 완료");
  };

  return (
    <section className={styles.my_info}>
      <Header />
      <div className={styles.logout}>
        <button className={styles.logout_button} onClick={onLogout}>
          로그아웃
        </button>
      </div>

      <Footer />
    </section>
  );
};

export default MyInfo;
