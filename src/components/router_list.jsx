import React from "react";
import { Route, Switch } from "react-router-dom";
import AddContentForm from "./add_content_form/add_content_form";
import AddPetsForm from "./add_pets_form/add_pets_form";
import Chat from "./chat/chat";
import Community from "./community/community";
import ContentInfo from "./content_info/content_info";
import Intro from "./intro/intro";
import PetInfo from "./pet_info/pet_info";
import PetList from "./pet_list/pet_list";
import Profile from "./profile/profile";

const RouterList = ({ FileInput, authService, userObj }) => (
  <Switch>
    <Route exact path="/">
      <Intro authService={authService} />
    </Route>

    {/* navbar */}
    <Route path="/pet-list">
      <PetList authService={authService} userObj={userObj} />
    </Route>
    <Route path="/chat" component={Chat} />

    <Route path="/profile">
      <Profile authService={authService} />
    </Route>

    {/* page */}
    <Route path="/add-pets-form">
      <AddPetsForm userObj={userObj} FileInput={FileInput} />
    </Route>
    <Route path="/pet-item/pet-info">
      <PetInfo userObj={userObj} />
    </Route>

    <Route exact path="/contents-list">
      <Community userObj={userObj} />
    </Route>
    <Route path="/content-add-form">
      <AddContentForm FileInput={FileInput} userObj={userObj} />
    </Route>
    <Route exact path="/contents-list/content-info">
      <ContentInfo userObj={userObj} />
    </Route>
  </Switch>
);

export default RouterList;
