import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <ul className={styles.navbar}>
      <li>
        <i className="fas fa-home fa-lg"></i>
        <span className={styles.nav_text}>홈</span>
      </li>
      <li>
        <i className="far fa-comments fa-lg"></i>
        <span className={styles.nav_text}>채팅</span>
      </li>
      <li>
        <i className="fas fa-user fa-lg"></i>
        <span className={styles.nav_text}>로그인</span>
      </li>
    </ul>
  );
};

export default Navbar;
