import React from "react";
import ReactDOM from "react-dom";
import ManageRoutes from "#/src/routes";
import reportWebVitals from "#/src/reportWebVitals";
import Mirage from "@/services/mirage";
import "@/assets/stylesheets/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <ManageRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

Mirage();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
