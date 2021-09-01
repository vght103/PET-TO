import React from "react";
import { Route, Switch } from "react-router-dom";
import AddContentForm from "./add_content_form/add_content_form";
import AddPetsForm from "./add_pets_form/add_pets_form";
import Chat from "./chat/chat";
import Community from "./community/community";
import Intro from "./intro/intro";
import MyInfo from "./my_info/my_info";
import PetInfo from "./pet_info/pet_info";
import PetList from "./pet_list/pet_list";

const RouterList = ({ authService, userObj }) => (
  <Switch>
    <Route exact path="/">
      <Intro authService={authService} />
    </Route>
    <Route path="/my-info">
      <MyInfo authService={authService} />
    </Route>
    <Route path="/pet-list">
      <PetList authService={authService} userObj={userObj} />
    </Route>
    <Route path="/chat" component={Chat} />
    <Route path="/community" component={Community} />

    <Route path="/add-pets-form">
      <AddPetsForm userObj={userObj} />
    </Route>
    <Route exact path="/pet-item/pet-info">
      <PetInfo userObj={userObj} />
    </Route>
    <Route path="/content-add-form">
      <AddContentForm />
    </Route>
  </Switch>
);

export default RouterList;
