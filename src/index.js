import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/auth_service";
import GetDataService from "./service/getData_service";

const authService = new AuthService();
const getDataService = new GetDataService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} getDataService={getDataService} />
  </React.StrictMode>,
  document.getElementById("root")
);
