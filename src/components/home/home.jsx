import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import PetList from "../pet_list/pet_list";
import styles from "./home.module.css";

const Home = ({ authService }) => {
  return (
    <>
      <section className={styles.home}>
        <Header />
        <PetList />
        <Navbar />
      </section>
    </>
  );
};

export default Home;
