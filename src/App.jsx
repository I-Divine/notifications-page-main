import { useState } from "react";
import "./App.css";
import NotifHeader from "./components/header";
import NotifContainer from "./components/notifications-container";
import { notificationsData } from "./notification-data";

function App() {
  const [notifications, setNotification] = useState(notificationsData);
  return (
    <>
      <div className="main-container">
        <NotifHeader
          notifications={notifications}
          setNotification={setNotification}
        />
        <NotifContainer
          notifications={notifications}
          setNotification={setNotification}
        />
      </div>
    </>
  );
}

export default App;
