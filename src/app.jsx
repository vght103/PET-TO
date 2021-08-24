import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import PetList from "./components/pet_list/pet_list";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route path="/pet-list">
            <PetList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
