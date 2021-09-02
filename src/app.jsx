import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import RouterList from "./components/router_list";

function App({ FileInput, authService }) {
  const [userObj, setUserObj] = useState(null);

  // 사용자 있을 시 자동으로 home 이동
  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserObj(user);
        // goToHome(user.uid);
      }
    });
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={styles.app}>
        <RouterList
          authService={authService}
          userObj={userObj}
          FileInput={FileInput}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

// {
//   <Switch>
//           <Route exact path="/">
//             <Intro authService={authService} />
//           </Route>
//           <Route path="/my-info">
//             <MyInfo authService={authService} />
//           </Route>
//           <Route path="/pet-list">
//             <PetList authService={authService} />
//           </Route>
//           <Route path="/chat" component={Chat} />
//           <Route path="/community" component={Community} />
//           <Route path="/add-pets-form" component={AddPetsForm} />
//           <Route path="/pet-item/pet-info" component={PetInfo} />
//           <Route path="">
//             <AddContentForm />
//           </Route>
//         </Switch>
// }
