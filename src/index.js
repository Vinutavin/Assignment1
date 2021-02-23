import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Logo from "./Logo";
import Topmenu from "./Topmenu";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Logo />
    <Topmenu />
  </StrictMode>,
  rootElement
);
