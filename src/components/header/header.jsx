import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({ setSearchData, getDataService }) => {
  const history = useHistory();
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(null);

  const goToHome = () => {
    history.push("/");
  };

  const onSearchData = () => {
    const inputText = inputRef.current.value;

    if (inputText) {
      getDataService.searchData(inputText).then((doc) => {
        setSearchData(doc.searchArray);
        setInputValue(doc.searchValue);
      });
    }
  };
  const onClickSearch = () => {
    const inputText = inputRef.current.value;
    if (inputText) {
      onSearchData();
    }
  };

  const onSearchEnter = (event) => {
    if (event.key === "Enter") {
      onSearchData();
    }
  };

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
          onKeyPress={onSearchEnter}
        />
        <button className={styles.button} onClick={onClickSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
