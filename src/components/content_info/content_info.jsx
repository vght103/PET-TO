import React from "react";
import { useHistory, useLocation } from "react-router";
import styles from "./content_info.module.css";

const ContentInfo = (props) => {
  const location = useLocation();

  const history = useHistory();
  const goToCommunity = () => {
    history.push("/contents-list");
  };

  return (
    <section>
      <div className={styles.title}>
        <button className={styles.cancel} onClick={goToCommunity}>
          <i className="fas fa-arrow-left fa-2x"></i>
        </button>
        <h2>컨텐츠 정보</h2>
      </div>
      <p>{location.state.category}</p>
      <p>{location.state.contentText}</p>
      <img src={location.state.img} alt="" />

      <h2>댓글</h2>
    </section>
  );
};

export default ContentInfo;
