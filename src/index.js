import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "./Css/styles.css";

import Logo from "./Logo";
import Topmenu from "./Topmenu";
import Breakingnews from "./Breakingnews";
import Footer from "./footer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="container">
    <StrictMode>
      <Logo />
      <Topmenu />
      <Breakingnews />
      <Footer />
    </StrictMode>
  </div>,
  rootElement
);
