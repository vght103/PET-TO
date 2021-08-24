import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/pet-home");
  };
  const goToChat = () => {
    history.push("/chat");
  };
  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <ul className={styles.navbar}>
      <li onClick={goToHome}>
        <i className="fas fa-home fa-lg"></i>
        <span className={styles.nav_text}>홈</span>
      </li>
      <li onClick={goToChat}>
        <i className="far fa-comments fa-lg"></i>
        <span className={styles.nav_text}>채팅</span>
      </li>
      <li onClick={goToLogin}>
        <i className="fas fa-user fa-lg"></i>
        <span className={styles.nav_text}>나의정보</span>
      </li>
    </ul>
  );
};

export default Navbar;
