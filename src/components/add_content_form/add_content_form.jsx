import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../../service/firebase";
import ImageInput from "../image_input/image_input";
import styles from "./add_content_form.module.css";

const AddContentForm = ({ userObj }) => {
  const [imgFiles, setImageFiles] = useState();

  const history = useHistory();
  const formRef = useRef();
  const textareaRef = useRef();
  const selectRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(imgFiles);

    const ok = window.confirm("등록하시겠습니까?");

    if (ok) {
      const imgFilesRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);

      let imgFilesUrl = null;
      if (imgFiles) {
        const response = await imgFilesRef.putString(imgFiles, "data_url");
        imgFilesUrl = await response.ref.getDownloadURL();
      }

      await dbService.collection("contents-list").add({
        creatorId: userObj.uid,
        category: selectRef.current.value,
        contentText: textareaRef.current.value,
        imgFilesUrl,
        createdAt: new Date(),
      });
    } else {
      return;
    }

    formRef.current.reset();
    goToCommunity();
  };

  const onChangeFile = (event) => {
    const {
      target: { files },
    } = event;

    const contentFiles = files[0];

    const imgsReader = new FileReader();
    imgsReader.onloadend = (finishedEvent) => {
      const imgResult = finishedEvent.currentTarget.result;

      setImageFiles(imgResult);
    };
    imgsReader.readAsDataURL(contentFiles);
  };

  const onFileClear = () => {
    setImageFiles(null);
  };

  const goToCommunity = () => {
    history.push("/contents-list");
  };

  return (
    <section className={styles.add_content}>
      <div className={styles.title}>
        <button className={styles.cancel} onClick={goToCommunity}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>컨텐츠 업로드</h2>
      </div>

      <form className={styles.form} ref={formRef}>
        <div className={styles.image_box}>
          <ImageInput onChangeFile={onChangeFile} />

          {imgFiles && (
            <div className={styles.content_imgs}>
              <img src={imgFiles} width="50px" height="50px" alt="이미지" />

              <button className={styles.clear_button} onClick={onFileClear}>
                ❌
              </button>
            </div>
          )}
        </div>

        <select ref={selectRef} className={styles.category}>
          <option>카테고리</option>
          <option>찾아주세요</option>
          <option>공유해요</option>
          <option>같이해요</option>
          <option>기부할게요</option>
          <option>기타</option>
        </select>

        <textarea
          ref={textareaRef}
          name="note"
          className={styles.content_info}
          placeholder="선택하신 카테고리에 맞는 내용을 작성해주세요."
        ></textarea>
        <button className={styles.submit_button} onClick={onSubmit}>
          완료
        </button>
      </form>
    </section>
  );
};

export default AddContentForm;
