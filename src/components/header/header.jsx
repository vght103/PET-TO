import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo} onClick={() => history.push("/pet-list")}>
        PeTo
      </h1>
      <img
        src={process.env.PUBLIC_URL + "/imgs/pets.png"}
        alt="logo이미지"
        width="60px"
      />
    </header>
  );
};

export default Header;
