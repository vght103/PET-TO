import React, { useState } from "react";
import Content from "../content/content";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./community.module.css";

const Community = (props) => {
  const [click, setClick] = useState(false);
  const [contents, setContents] = useState([
    {
      id: "1",
      name: "아롱이",
      breed: "믹스견",
      age: "2",
      gender: "암컷",
      weight: "1kg",
      character: "굉장히 순하고 사람을 좋아해요!",
      img: null,
    },

    {
      id: "2",
      name: "삽사리",
      breed: "포메라니안",
      age: "3",
      gender: "암컷",
      weight: "10kg",
      character: "간식과 산책을 좋아하고 사람을 잘 따릅니다!",
      img: null,
    },
  ]);

  const handleClick = () => setClick(!click);
  console.log(click);

  return (
    <section className={styles.community}>
      <Header />
      <ul className={styles.content_list}>
        {contents.map((item) => (
          <Content key={item.id} item={item} />
        ))}
      </ul>

      <div className={styles.add_button}>
        <button className={styles.plus} onClick={handleClick}>
          <i className={"fas fa-plus fa-lg"}></i>
        </button>
        <ul className={styles.add_list}>
          <li
            className={
              click
                ? `${styles.add_item} ${styles.active}`
                : `${styles.add_item}`
            }
          >
            <span> 글쓰기</span>
            <i className="fas fa-pen"></i>
          </li>
        </ul>
      </div>
      <Navbar />
    </section>
  );
};

export default Community;
