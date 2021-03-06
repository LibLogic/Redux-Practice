import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
  registerServiceWorker();
};

render();

store.subscribe(render);
