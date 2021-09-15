import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { firestoreService } from "../../service/firebase";
import styles from "./application_form.module.css";

const ApplicationForm = ({ userObj }) => {
  const history = useHistory();
  const formRef = useRef();
  const petIdRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const regionRef = useRef();
  const phoneRef = useRef();
  const raiseRef = useRef();
  const experienceRef = useRef();
  const placeRef = useRef();
  const protectorRef = useRef();
  const textareaRef = useRef();

  const location = useLocation();
  const [petInfo] = useState(location.state);
  const [formValues, setFormValues] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // 스토리지로 이미지 업로드

    const ok = window.confirm("등록하시겠습니까?");
    if (ok) {
      await firestoreService.collection("application-list").add({
        createdAt: new Date(),
        creatorId: userObj.uid,
        creatorName: userObj.displayName,
        creatorPhoto: userObj.photoURL,
        petId: petInfo.createAt.seconds,
        petPhoto: petInfo.imgFilesUrl,
        name: nameRef.current.value,
        email: emailRef.current.value,
        region: regionRef.current.value,
        phone: phoneRef.current.value,
        raise: raiseRef.current.value,
        experience: experienceRef.current.value,
        protector: protectorRef.current.value,
        applicationText: textareaRef.current.value,
      });

      alert("임시보호 신청이 완료되었습니다.");
    } else {
      setLoading(false);
      return;
    }
    setLoading(false);
    formRef.current.reset();
    goToHome();
  };

  const goToHome = () => {
    history.push("/pet-list");
  };

  //  form 유효성 검사
  const onValueChange = () => {
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const regionValue = regionRef.current.value;
    const phoneValue = phoneRef.current.value;
    const raiseValue = raiseRef.current.value;
    const experienceValue = experienceRef.current.value;
    const placeValue = placeRef.current.value;
    const protectorValue = protectorRef.current.value;
    const textareaValue = textareaRef.current.value;
    if (
      // petIdValue &&
      nameValue &&
      emailValue &&
      regionValue &&
      phoneValue &&
      raiseValue &&
      experienceValue &&
      placeValue &&
      protectorValue &&
      textareaValue
    ) {
      setFormValues(true);
    } else {
      setFormValues(false);
    }
  };

  return (
    <section className={styles.add_pets}>
      <div className={styles.title}>
        <button className={styles.cancel} onClick={goToHome}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>임시보호 신청서</h2>
      </div>

      <form className={styles.form} ref={formRef}>
        <ul>
          <li className={styles.pet_number_box}>
            <h3>PET No</h3>
            <label
              ref={petIdRef}
              name="petId"
              className={styles.pet_number}
              onChange={onValueChange}
            >
              {petInfo.createAt.seconds}
            </label>
          </li>

          <li className={styles.applicant}>
            <h3>신청자 정보</h3>
          </li>

          <li className={styles.input_box}>
            <input
              ref={nameRef}
              name="name"
              className={styles.name}
              placeholder="이름"
              onChange={onValueChange}
            />
          </li>

          <li className={styles.input_box}>
            <input
              ref={emailRef}
              name="email"
              type="email"
              className={styles.email}
              placeholder="이메일 ex) example@gmail.com"
              onChange={onValueChange}
            />
          </li>

          <li className={styles.input_box}>
            <input
              ref={phoneRef}
              name="phone"
              className={styles.phone}
              placeholder="핸드폰 번호 ex) 010-1234-5678"
              onChange={onValueChange}
              maxLength="13"
            />
          </li>

          <li className={styles.input_box}>
            <input
              ref={regionRef}
              name="region"
              className={styles.region}
              placeholder="거주지역 ex) 서울시 강동구 성내동"
              onChange={onValueChange}
            />
          </li>

          <li className={styles.input_box}>
            <p>현재 반려동물을 키우고 계신가요?</p>
            <input
              ref={raiseRef}
              name="raise"
              className={styles.raise}
              placeholder="ex) 없음 / 1마리 / 2마리 이상"
              onChange={onValueChange}
            />
          </li>

          <li className={styles.input_box}>
            <p>반려동물을 키워보신 경험이 있으신가요?</p>
            <input
              ref={experienceRef}
              name="experience"
              className={styles.experience}
              placeholder="ex) 경험없음 / 경험있음"
              onChange={onValueChange}
            />
          </li>

          <li className={styles.input_box}>
            <p>현재 거주하고 계신 거주지는 어디신가요?</p>
            <input
              ref={placeRef}
              name="place"
              className={styles.place}
              placeholder="ex) 아파트 / 주택 / 마당여부"
              onChange={onValueChange}
            />
          </li>

          <li className={styles.input_box}>
            <p>반려동물과 함께 할 보호자가 2명 이상인가요?</p>
            <input
              ref={protectorRef}
              name="protector"
              placeholder="보호자 및 가족구성원을 작성해주세요"
              className={styles.protector}
              onChange={onValueChange}
            />
          </li>

          <li className={styles.input_box}>
            <p>신청 사유</p>
            <textarea
              ref={textareaRef}
              name="textarea"
              className={styles.textarea}
              placeholder="임시보호를 신청하신 이유를 간단히 말씀해주세요"
              onChange={onValueChange}
            ></textarea>
          </li>
        </ul>

        <button
          disabled={!formValues}
          className={styles.submit_button}
          onClick={onSubmit}
        >
          완료
        </button>
      </form>

      {loading && <div className={styles.loading}></div>}
    </section>
  );
};

export default ApplicationForm;
