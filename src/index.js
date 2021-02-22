import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Logo from "./Logo";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Logo />
    <App />
  </StrictMode>,
  rootElement
);
