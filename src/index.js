import React, { Fragment } from "react";
import ReactDom from "react-dom/client";
import App from "./App";

let x = ReactDom.createRoot(document.getElementById("root"));

x.render(<App />);
