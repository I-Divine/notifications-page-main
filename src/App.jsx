import { useState } from "react";
import "./App.css";
import NotifHeader from "./components/header";
import NotifContainer from "./components/notifications-container";

function App() {
  return (
    <>
      <div class="main-container">
        <NotifHeader />
        <NotifContainer />
      </div>
    </>
  );
}

export default App;
