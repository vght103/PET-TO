import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <img
        src={process.env.PUBLIC_URL + "/imgs/logo.jpg"}
        alt="logo"
        className={styles.logo}
        onClick={() => history.push("/pet-list")}
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
