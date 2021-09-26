import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ setSearchData, getDataService }) => {
  const history = useHistory();
  const inputRef = useRef();

  const onSearchData = () => {
    const inputValue = inputRef.current.value;
    if (!inputValue) {
      return;
    }
    getDataService
      .searchData(inputValue)
      .then((doc) => setSearchData(doc.searchArray));
  };

  const searchEnter = (event) => {
    if (event.key === "Enter") {
      onSearchData();
    }
  };

  // const onSearchResult = () => {
  //   const inputValue = inputRef.current.value;

  //   firestoreService //
  //     .collection("pets-list")
  //     .where("breed", "==", inputValue)
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => console.log(doc.data()));
  //     });

  //   console.log(inputValue);
  // };

  return (
    <header className={styles.header}>
      <img
        src={process.env.PUBLIC_URL + "/imgs/logo.jpg"}
        alt="logo"
        className={styles.logo}
        onClick={() => history.push("/pet-list")}
      />
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.search_input}
          onKeyPress={searchEnter}
        />
        <button className={styles.button} onClick={onSearchData}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
