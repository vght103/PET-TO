import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import RouterList from "./components/router_list";

function App({ FileInput, authService, getDataService }) {
  const [userObj, setUserObj] = useState(null);

  // 사용자 있을 시 자동으로 home 이동
  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserObj(user);
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
      </div>
    </BrowserRouter>
  );
}

export default App;
