import React, { useRef } from "react";
import styles from "./image_input.module.css";

const ImageInput = ({ onChangeFile }) => {
  const inputRef = useRef();
  // const [imgFiles, setImgFiles] = useState();
  // const [loading, setLoading] = useState(false);

  // const onChangeFile = (event) => {
  //   setLoading(true);

  //   const fileArray = event.target.files;
  //   const filesLength = fileArray.length > 5 ? 5 : fileArray.length;
  //   let fileURLs = [];

  //   for (let i = 0; i < filesLength; i++) {
  //     const file = fileArray[i];
  //     const imageReader = new FileReader();
  //     imageReader.onloadend = () => {
  //       fileURLs[i] = imageReader.result;
  //       setImgFiles([...fileURLs]);
  //     };
  //     imageReader.readAsDataURL(file);
  //   }

  //   if (!imgFiles) {
  //   }

  //   setLoading(false);
  // };

  // const onFileClear = () => {
  //   setImgFiles(null);
  // };

  const onFileClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        multiple
        type="file"
        accept="image/*"
        className={styles.image_input}
        onChange={onChangeFile}
      />
      <button className={styles.add_button} onClick={onFileClick}>
        <i className="far fa-plus-square fa-4x"></i>
      </button>

      {/* {imgFiles && (
        <div className={styles.pet_imgs}>
          <img src={imgFiles} width="50px" height="50px" alt="" />
          <button className={styles.clear_button} onClick={onFileClear}>
            ❌
          </button>
        </div>
      )}
      {loading && <div className={styles.loading}></div>} */}
    </div>
  );
};

export default ImageInput;
