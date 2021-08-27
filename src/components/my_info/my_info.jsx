import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navbar/navbar";

import styles from "./my_info.module.css";

const MyInfo = ({ authService }) => {
  // const [user, setUser] = useState();
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
    history.push("/");
    console.log("로그아웃 완료");
  };

  useEffect(() => {
    authService.onAuthChanged((user) => authService.onUserCheck(user));
  });

  return (
    <section className={styles.my_info}>
      <div className={styles.logout}>
        <button className={styles.logout_button} onClick={onLogout}>
          로그아웃
        </button>
      </div>
      <Navbar />
    </section>
  );
};

export default MyInfo;
