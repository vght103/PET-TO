import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./intro.module.css";

const Intro = (props) => {
  const history = useHistory();

  const goToPetList = () => {
    history.push("/pet-list");
  };

  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>Pet To</h1>
      <h2 className={styles.sub_title} onClick={goToPetList}>
        시작하기
      </h2>
    </div>
  );
};

export default Intro;
