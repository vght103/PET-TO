import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dbService } from "../../service/firebase";
import Content from "../content/content";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./community.module.css";

const Community = (props) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    dbService.collection("contents-list").onSnapshot((snapshot) => {
      const dbContents = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContents(dbContents);
    });
  }, []);

  const handleClick = () => setClick(!click);
  console.log(click);

  const goToAddContentForm = () => {
    history.push({
      pathname: "/content-add-form",
    });
  };

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
            onClick={goToAddContentForm}
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
