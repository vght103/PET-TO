import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Intro from "./components/intro/intro";
import Chat from "./components/chat/chat";
import MyInfo from "./components/my_info/my_info";
import Community from "./components/community/community";
import AddPets from "./components/add_pets/add_pets";
import Home from "./components/home/home";
import PetInfo from "./components/pet_info/pet_info";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Intro authService={authService} />
          </Route>
          <Route path="/my-info">
            <MyInfo authService={authService} />
          </Route>
          <Route path="/pet-home" component={Home} />
          <Route path="/chat" component={Chat} />
          <Route path="/community" component={Community} />
          <Route path="/add-pets" component={AddPets} />
          <Route path="/pet-item/pet-info" component={PetInfo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
