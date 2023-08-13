import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import "./Index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router />
);

reportWebVitals();
