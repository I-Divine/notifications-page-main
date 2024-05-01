import NotifDetails from "./notification-details";
import NotifMessage from "./notification-msg";

const Notification = () => {
  return (
    <div className="notification">
      <img src="/images/avatar-angela-gray.webp" alt="" />
      <div>
        <NotifDetails />
        <NotifMessage></NotifMessage>
      </div>
    </div>
  );
};
export default Notification;
