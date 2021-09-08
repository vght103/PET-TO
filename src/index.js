import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/auth_service";
import DataService from "./service/data_service";

const authService = new AuthService();
const dataService = new DataService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} dataService={dataService} />
  </React.StrictMode>,
  document.getElementById("root")
);
