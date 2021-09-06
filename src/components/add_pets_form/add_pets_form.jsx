import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";
import { dbService, storageService } from "../../service/firebase";
import styles from "./add_pets_form.module.css";
import ImageInput from "../image_input/image_input";

const AddPetsForm = ({ userObj }) => {
  const [imgFiles, setImgFiles] = useState();

  const history = useHistory();
  const formRef = useRef();
  const titleRef = useRef();
  const nameRef = useRef();
  const breedRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const weightRef = useRef();
  const textareaRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    // 스토리지로 이미지 업로드
    const imgFilesRef = storageService
      .ref()
      .child(`${userObj.uid}/${uuidv4()}`);
    const response = await imgFilesRef.putString(imgFiles, "data_url");
    const imgFilesUrl = await response.ref.getDownloadURL();

    const ok = window.confirm("등록하시겠습니까?");
    if (ok) {
      await dbService.collection("pets-list").add({
        createAt: Date.now(),
        creatorId: userObj.uid,
        title: titleRef.current.value,
        name: nameRef.current.value,
        breed: breedRef.current.value,
        age: ageRef.current.value,
        gender: genderRef.current.value,
        weight: weightRef.current.value,
        character: textareaRef.current.value,
        imgFilesUrl,
      });
    }

    formRef.current.reset();
    goToHome();
  };

  const goToHome = () => {
    history.push("/pet-list");
  };

  const onChangeFile = (event) => {
    const {
      target: { files },
    } = event;

    const petFiles = files[0];

    const imgsReader = new FileReader();
    imgsReader.onloadend = (finishedEvent) => {
      const imgResult = finishedEvent.currentTarget.result;
      setImgFiles(imgResult);
    };

    imgsReader.readAsDataURL(petFiles);
  };

  const onFileClear = () => {
    setImgFiles(null);
  };

  return (
    <section className={styles.add_pets}>
      <div className={styles.title}>
        <button className={styles.cancel} onClick={goToHome}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>강아지 정보 업로드</h2>
      </div>

      <form className={styles.form} ref={formRef}>
        <div className={styles.image_box}>
          <ImageInput onChangeFile={onChangeFile} />
          {/* <input
          type="file"
          accept="image/*"
          className={styles.file}
          onChange={onChangeFile}
        /> */}

          {imgFiles && (
            <div className={styles.pet_imgs}>
              <img
                src={imgFiles}
                width="50px"
                height="50px"
                alt={nameRef.current.name}
              />
              <button className={styles.clear_button} onClick={onFileClear}>
                ❌
              </button>
            </div>
          )}
        </div>

        <input
          ref={titleRef}
          name="title"
          className={styles.form_title}
          placeholder="제목을 적어주세요"
        />

        <input
          ref={nameRef}
          name="name"
          className={styles.name}
          placeholder="이름 ex) 황구"
        />

        <input
          ref={breedRef}
          name="breed"
          className={styles.breed}
          placeholder="견종 ex) 진돗개"
        />

        <input
          ref={ageRef}
          name="age"
          className={styles.age}
          placeholder="나이 ex) 2세 / 24개월 "
        />

        <input
          ref={genderRef}
          name="gender"
          className={styles.gender}
          placeholder="성별 ex) 암컷 or 수컷"
        />

        <input
          ref={weightRef}
          name="weight"
          className={styles.weight}
          placeholder="무게 ex) 5kg"
        />

        <textarea
          ref={textareaRef}
          name="note"
          className={styles.character}
          placeholder="강아지의 특징 또는 성격을 작성해주세요"
        ></textarea>

        <button className={styles.submit_button} onClick={onSubmit}>
          완료
        </button>
      </form>
    </section>
  );
};

export default AddPetsForm;
