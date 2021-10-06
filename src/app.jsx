import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
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
    <HashRouter>
      <div className={styles.app}>
        <Header />

        <RouterList
          authService={authService}
          getDataService={getDataService}
          userObj={userObj}
          FileInput={FileInput}
        />
        <Navbar userId={userId} />
      </div>
    </HashRouter>
  );
}

export default App;
{
  /* <BrowserRouter basename={process.env.PUBLIC_URL}> */
}
{
  /* </BrowserRouter> */
}
