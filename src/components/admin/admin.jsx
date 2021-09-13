import React from "react";
import Navbar from "../navbar/navbar";
import styles from "./admin.module.css";

const Admin = ({ userObj }) => {
  return (
    <section>
      <div className={styles.header}>
        <h2>관리자 페이지</h2>
      </div>
      <div>
        <h3>임시보호 신청자 리스트</h3>
        <ul></ul>
      </div>
      <div className={styles.navbar}>
        <Navbar userObj={userObj} />
      </div>
    </section>
  );
};
export default Admin;
