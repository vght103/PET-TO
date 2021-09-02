import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/auth_service";
import PetDatabase from "./service/petDatabase";
import ImageUpload from "./service/image_upload";
import ImageInput from "./components/image_input/image_input";

const petDatabase = new PetDatabase();
const authService = new AuthService();
const imageUpload = new ImageUpload();

const FileInput = (props) => (
  <ImageInput {...props} imageUpload={imageUpload} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      petRepository={petDatabase}
      FileInput={FileInput}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
