import React, { useRef } from "react";
import styles from "./image_input.module.css";

const ImageInput = ({ imageUpload }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onFileChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imageUpload.upload(event.target.files[0]);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.image_input}
        onChange={onFileChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        <i className="far fa-plus-square fa-3x"></i>
      </button>
    </>
  );
};

export default ImageInput;
