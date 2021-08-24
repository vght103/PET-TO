import React from "react";
import Navbar from "../navbar/navbar";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <Navbar />
    </footer>
  );
};

export default Footer;
