import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const googleLogin = () => {
    authService.login();
  };

  return (
    <section className={styles.login_wrap}>
      <Header />
      <div className={styles.login}>
        <h2 className={styles.login_title}>로그인</h2>
        <form>
          <div className={styles.login_form}>
            <input
              className={styles.input_id}
              required
              placeholder="아이디를 입력하세요"
            />
            <input
              type="password"
              className={styles.input_password}
              required
              placeholder="비밀번호를 입력하세요"
            />
            <button className={styles.login_button}>로그인</button>
          </div>
        </form>
        <div className={styles.google_box}>
          <button className={styles.google_login} onClick={googleLogin}>
            Google
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Login;
