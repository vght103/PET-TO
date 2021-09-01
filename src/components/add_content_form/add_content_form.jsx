import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./add_content_form.module.css";

const AddContentForm = (props) => {
  const history = useHistory();
  const formRef = useRef();
  const titleRef = useRef();
  const nameRef = useRef();
  const breedRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const weightRef = useRef();
  const characterRef = useRef();

  const goToComunity = () => {
    history.push("/community");
  };

  return (
    <section className={styles.add_content}>
      <div className={styles.title}>
        <button className={styles.cancel} onClick={goToComunity}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>컨텐츠 업로드</h2>
      </div>

      <form className={styles.form} ref={formRef}>
        <input
          // ref={fileRef}
          type="file"
          accept="image/*"
          className={styles.file}
        />
        {/* <div className={styles.content_imgs}>
          <img src="" width="50px" height="50px" alt="" />
          <button className={styles.clear_button}>삭제</button>
        </div> */}

        <select className={styles.category}>
          <option value="">카테고리</option>
          <option value="">찾아주세요</option>
          <option value="">공유해요</option>
          <option value="">같이해요</option>
          <option value="">기부할게요</option>
          <option value="">기타</option>
        </select>

        <textarea
          ref={characterRef}
          name="note"
          className={styles.character}
          placeholder="선택하신 카테고리에 맞는 내용을 작성해주세요."
        ></textarea>
        <button disabled className={styles.submit_button} onClick={onsubmit}>
          완료
        </button>
      </form>
    </section>
  );
};

export default AddContentForm;
