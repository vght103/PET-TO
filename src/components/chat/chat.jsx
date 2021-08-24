import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./chat.module.css";

const Chat = (props) => {
  return (
    <section className={styles.chat_wrap}>
      <Header />
      <h2>채팅</h2>;
      <Footer />
    </section>
  );
};

export default Chat;
