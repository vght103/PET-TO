import React from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./community.module.css";

const Community = (props) => {
  return (
    <section className={styles.community}>
      <Header />
      <h2>커뮤니티</h2>
      <Navbar />
    </section>
  );
};

export default Community;
