import NotifDetails from "./notification-details";
import NotifMessage from "./notification-msg";

const Notification = ({ notif_info, notifications, setNotification }) => {
  const {
    id,
    avatar_url,
    name,
    action,
    item,
    unread,
    time,
    message,
    your_picture,
  } = notif_info;
  const setRead = (id) => {
    console.log(id);
    const temp = notifications.map((item) => {
      console.log(item);

      if (item.id == id) {
        let readitem = { ...item, unread: false };
        return readitem;
      }
      return item;
    });
    setNotification(temp);
  };
  return (
    <div
      className={unread ? "notification unread" : "notification"}
      onClick={() => setRead(id)}
    >
      <img src={avatar_url} alt="" />
      <div>
        <NotifDetails name={name} action={action} item={item} time={time} />
        {message && <NotifMessage message={message}></NotifMessage>}
      </div>
    </div>
  );
};
export default Notification;
