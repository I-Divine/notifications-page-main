import Notification from "./notification";
const NotifContainer = ({ notifications, setNotification }) => {
  console.log(notifications);
  return (
    <div className="notifContainer">
      {notifications.map((item) => {
        return (
          <Notification
            key={item.id}
            notif_info={item}
            notifications={notifications}
            setNotification={setNotification}
          />
        );
      })}
    </div>
  );
};
export default NotifContainer;
