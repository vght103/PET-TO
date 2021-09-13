import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Content from "../content/content";
import Header from "../header/header";
import styles from "./community.module.css";

const Community = ({ userObj, getDataService }) => {
  const history = useHistory();
  const [click, setClick] = useState(false);
  const [contents, setContents] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getDataService //
      .firstContentsData()
      .then((res) => {
        setContents(res.contentsArr);
        setLastKey(res.lastKey);
        setLoading(false);
      });
  }, [getDataService]);

  const fetchMoreData = (key) => {
    if (key > 0) {
      setLoading(true);
      getDataService //
        .nextContentsData(key)
        .then((res) => {
          setLastKey(res.lastKey);
          setContents(contents.concat(res.contentsArr));
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  //무한 스크롤
  const handleScroll = (event) => {
    let scrollTop = event.target.scrollTop;
    let clientHeight = event.target.clientHeight;
    let scrollHeigth = event.target.scrollHeight;

    if (scrollTop + (clientHeight + 1) >= scrollHeigth) {
      fetchMoreData(lastKey);
    }
  };
  document.addEventListener("scroll", handleScroll);

  const goToAddContentForm = () => {
    history.push("/content-add-form");
  };

  const handleClick = () => setClick(!click);
  return (
    <section className={styles.community}>
      <Header />
      <ul className={styles.content_list} onScroll={handleScroll}>
        {contents.map((item) => (
          <Content
            key={item.id}
            item={item}
            isOwner={userObj.uid === item.creatorId}
          />
        ))}
      </ul>

      <div className={styles.add_button}>
        <button className={styles.plus} onClick={handleClick}>
          <i className={"fas fa-plus fa-lg"}></i>
        </button>
        <ul className={styles.add_list} onScroll={handleScroll}>
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

      {/* <Navbar /> */}
    </section>
  );
};

export default Community;
