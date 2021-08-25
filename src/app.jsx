import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Intro from "./components/intro/intro";
import PetList from "./components/pet_list/pet_list";
import Chat from "./components/chat/chat";
import MyInfo from "./components/my_info/my_info";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Intro authService={authService} />
          </Route>
          <Route path="/pet-home">
            <PetList />
          </Route>
          <Route path="/login">
            <MyInfo authService={authService} />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
