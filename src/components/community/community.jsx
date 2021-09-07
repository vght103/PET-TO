import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dbService } from "../../service/firebase";
import Content from "../content/content";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import styles from "./community.module.css";

const Community = ({ userObj }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    dbService
      .collection("contents-list")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLoading(false);
        setContents(data);
      });

    // setContents(doc);

    // .onSnapshot((snapshot) => {
    //   const dbContents = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));

    //   setContents(dbContents);
    // });
  }, []);

  const goToAddContentForm = () => {
    history.push("/content-add-form");
  };

  const handleClick = () => setClick(!click);
  return (
    <section className={styles.community}>
      <Header />
      <ul className={styles.content_list}>
        {contents.map((item) => (
          // console.log(item)
          <Content
            key={item.id}
            item={item}
            isOwner={userObj.uid === item.creatorId}
            userObj={userObj}
          />
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
      {loading && <div className={styles.loading}></div>}

      <Navbar />
    </section>
  );
};

export default Community;
