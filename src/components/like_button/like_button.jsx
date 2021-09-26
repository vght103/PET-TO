import React, { useRef, useState } from "react";
import styles from "./like_button.module.css";

const LikeButton = (props) => {
  const [count, setCount] = useState(null);
  const [click, setClick] = useState(true);

  const countRef = useRef();

  const handleClick = () => {
    setClick(!click);

    if (click) {
      likePlus();
    } else {
      likeMinus();
    }
    console.log(click);
  };

  const likePlus = () => {
    setCount(count + 1);
  };

  const likeMinus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.likeBox}>
      <button className={styles.like_button} onClick={handleClick}>
        <i className="far fa-thumbs-up"></i>
        <span>좋아요</span>
      </button>

      <span ref={countRef} className={styles.count}>
        {count === 0 ? "" : count}
      </span>
    </div>
  );
};

export default LikeButton;
