// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import homePg from "./homePage";
import useScannerPg from "./scannerPage";
import reviewPg from "./reviewPage";


const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" Component={homePg}/>
    <Route path="/useScannerPg" Component={useScannerPg}/>
    <Route path="/reviewPg" Component={reviewPg}/>
  </Routes>
  </BrowserRouter>,
  rootElement
);

