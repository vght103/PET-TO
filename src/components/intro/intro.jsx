import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./intro.module.css";

const Intro = ({ authService }) => {
  const history = useHistory();

  const goToHome = (userId) => {
    // 로그인 완료되면 사용자정보와 함께 홈으로 간다
    history.push({
      pathname: "/pet-list",
      state: { id: userId },
    });
  };

  // 구글 로그인
  const googleLogin = () => {
    authService.login().then((data) => goToHome(data.user.uid));
  };

  // 사용자 있을 시 자동으로 home 이동
  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        goToHome(user.uid);
      }
    });
  });

  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>Pet To</h1>
      <button className={styles.login_button} onClick={googleLogin}>
        Google 계정으로 시작하기
      </button>
    </div>
  );
};

export default Intro;