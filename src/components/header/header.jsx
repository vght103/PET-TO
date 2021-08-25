import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <h3>사용자변경하기</h3>
      <img
        src={process.env.PUBLIC_URL + "/imgs/logo.jpg"}
        alt="logo"
        className={styles.logo}
        onClick={() => history.push("/pet-home")}
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
