import React from "react";
import Navbar from "../navbar/navbar";

import styles from "./chat.module.css";

const Chat = (props) => {
  return (
    <section className={styles.chat_wrap}>
      <h2>채팅</h2>
      <Navbar />
    </section>
  );
};

export default Chat;
