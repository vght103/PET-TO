import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Intro from "./components/intro/intro";
import Chat from "./components/chat/chat";
import MyInfo from "./components/my_info/my_info";
import Community from "./components/community/community";
import PetInfo from "./components/pet_info/pet_info";
import PetList from "./components/pet_list/pet_list";
import AddPetsForm from "./components/add_pets_form/add_pets_form";
import AddContentForm from "./components/add_content_form/add_content_form";

function App({ authService, petDatabase }) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={styles.app}>
        <Switch>
          <Route exact path="/">
            <Intro authService={authService} />
          </Route>
          <Route path="/my-info">
            <MyInfo authService={authService} />
          </Route>
          <Route path="/pet-list">
            <PetList authService={authService} petDatabase={petDatabase} />
          </Route>
          <Route path="/chat" component={Chat} />
          <Route path="/community" component={Community} />
          <Route
            path="/add-pets-form"
            component={AddPetsForm}
            petDatabase={petDatabase}
          />
          <Route path="/pet-item/pet-info" component={PetInfo} />
          <Route path="">
            <AddContentForm />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
