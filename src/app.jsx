import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Intro from "./components/intro/intro";
import PetList from "./components/pet_list/pet_list";
import Login from "./components/login/login";
import Chat from "./components/chat/chat";

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
            <Login />
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
