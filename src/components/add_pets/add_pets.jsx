import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { dbService } from "../../service/firebase";
import styles from "./add_pets.module.css";

const AddPets = ({ petDatabase }) => {
  const [newPet, setNewPet] = useState("");
  const [pets, setPests] = useState([]);

  const getPets = async () => {
    const dbPets = await dbService.collection("pet-to").get();
    dbPets.forEach((doc) => console.log(doc.data()));
  };

  useEffect(() => {
    getPets();
  }, []);

  const history = useHistory();
  const formRef = useRef();
  const nameRef = useRef();
  const breedRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const weightRef = useRef();
  const noteRef = useRef();

  const onsubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("pet-to").add({
      newPet,
      id: Date.now(),
      name: nameRef.current.value,
      breed: breedRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
      weight: weightRef.current.value,
      character: noteRef.current.value,
      img: null,
    });

    formRef.current.reset();
    goToHome();
    // const newPet = {
    //   id: Date.now(),
    //   name: nameRef.current.value,
    //   breed: breedRef.current.value,
    //   age: ageRef.current.value,
    //   gender: genderRef.current.value,
    //   weight: weightRef.current.value,
    //   character: noteRef.current.value,
    //   img: null,
    // };

    // if (!newPet.character) {
    //   return;
    // }
  };

  const goToHome = () => {
    history.push("/pet-list");
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
        <input type="file" accept="image/*" className={styles.file} />

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
          ref={noteRef}
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

export default AddPets;
