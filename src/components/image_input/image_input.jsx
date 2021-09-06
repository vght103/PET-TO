import React, { useRef } from "react";
import styles from "./image_input.module.css";

const ImageInput = ({ onChangeFile }) => {
  const inputRef = useRef();

  const onFileClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.image_input}
        onChange={onChangeFile}
      />
      <button className={styles.add_button} onClick={onFileClick}>
        <i className="far fa-plus-square fa-4x"></i>
      </button>
    </div>
  );
};

export default ImageInput;
