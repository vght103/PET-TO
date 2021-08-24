import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>홈 / 채팅 /로그인 라우터 하기</h1>
      <img
        src={process.env.PUBLIC_URL + "/imgs/logo.jpg"}
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.search}>
        <input className={styles.search_input} />
        <button className={styles.button}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
