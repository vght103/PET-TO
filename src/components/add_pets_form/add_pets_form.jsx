import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";
import { dbService, storageService } from "../../service/firebase";
import styles from "./add_pets_form.module.css";

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
  const characterRef = useRef();

  const onsubmit = async (event) => {
    event.preventDefault();
    // 스토리지로 이미지 업로드
    const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4}`);
    const response = await fileRef.putString(imgFiles, "data_url");
    console.log(response);

    // const ok = window.confirm("등록하시겠습니까?");

    // if (ok) {
    //   // onAddPet();
    // }

    formRef.current.reset();
    // goToHome();
  };

  // const onAddPet = () => {
  //   dbService.collection("pets-list").add({
  //     createAt: Date.now(),
  //     creatorId: userObj.uid,
  //     title: titleRef.current.value,
  //     name: nameRef.current.value,
  //     breed: breedRef.current.value,
  //     age: ageRef.current.value,
  //     gender: genderRef.current.value,
  //     weight: weightRef.current.value,
  //     character: characterRef.current.value,
  //     // img:
  //   });
  // };

  const goToHome = () => {
    history.push("/pet-list");
  };

  const onChangeFile = (event) => {
    // es6 문법
    // event 안에서 target 안으로 가서 files 를 받아오는 것
    const {
      target: { files },
    } = event;

    const petFiles = files[0];

    // 2. 파일 불러오기
    // -> fileReader API 이용하기 : 비동기적으로 데이터(파일)를 읽기 위한 것

    const imgsReader = new FileReader();
    imgsReader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setImgFiles(result);
    };

    imgsReader.readAsDataURL(petFiles);

    // result = petFiles를 갖고, 이미지리더를 만들고,
    // readAsDataURL 로 이미지 데이터를 읽는다
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
        <input
          // ref={fileRef}
          type="file"
          accept="image/*"
          className={styles.file}
          onChange={onChangeFile}
        />

        {imgFiles && (
          <div className={styles.pet_imgs}>
            <img
              src={imgFiles}
              width="50px"
              height="50px"
              alt={nameRef.current.name}
            />
            <button className={styles.clear_button} onClick={onFileClear}>
              삭제
            </button>
          </div>
        )}

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
          ref={characterRef}
          name="note"
          className={styles.character}
          placeholder="강아지의 특징 또는 성격을 작성해주세요"
        ></textarea>

        <button className={styles.submit_button} onClick={onsubmit}>
          완료
        </button>
      </form>
    </section>
  );
};

export default AddPetsForm;
