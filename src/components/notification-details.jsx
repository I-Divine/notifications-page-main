const NotifDetails = ({ name, action, item, time }) => {
  return (
    <div className="notif-details">
      <span className="notif-sender">{name}</span>
      <span className="notif-action">{action}</span>
      <span className="notif-item">{item}</span>
      <p className="notif-time">{time}</p>
    </div>
  );
};
export default NotifDetails;
