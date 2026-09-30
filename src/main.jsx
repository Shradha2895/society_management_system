// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import MytmakaanHomepage from "./components/Mytmakaanhomepage";
// import AppShowcase from "./components/AppShowcase";
// import Features from "./components/Features";
// import LessHassle from "./components/Lesshassle";
// import GettingStarted from "./components/Gettingstarted";
// import AppScreens from "./components/Appscreens";
// import BuiltForEveryone from "./components/Builtforeveryone";
// import DesignedAround from "./components/Designedaround";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <MytmakaanHomepage />
//     <AppShowcase />
//     <Features />
//     <LessHassle/>
//     <GettingStarted/>
//         <AppScreens />
//         <BuiltForEveryone/>

//          <DesignedAround />
//   </>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);