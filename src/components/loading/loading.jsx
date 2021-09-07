import React, { useState } from "react";
import styles from "./loading.module.css";
const Loading = (props) => {
  const [loading, setLoading] = useState(false);

  return <>{loading && <div className={styles.loading}></div>}</>;
};

export default Loading;
