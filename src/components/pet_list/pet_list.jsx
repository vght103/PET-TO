import React from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./pet_list.module.css";

const PetList = (props) => {
  return (
    <div className={styles.pet_list}>
      <Header />
      <Navbar />
    </div>
  );
};

export default PetList;
