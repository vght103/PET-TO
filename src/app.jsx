import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import RouterList from "./components/router_list";

function App({ FileInput, authService, getDataService }) {
  const [userObj, setUserObj] = useState(null);
  const [userId, setUserId] = useState(null);

  // 사용자 있을 시 자동으로 home 이동
  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserObj(user);
        setUserId(user.uid);
      }
    });
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={styles.app}>
        <RouterList
          authService={authService}
          getDataService={getDataService}
          userObj={userObj}
          FileInput={FileInput}
        />
        <div className={styles.navbar}>
          <Navbar userId={userId} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
