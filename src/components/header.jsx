const NotifHeader = ({ notifications, setNotification }) => {
  let unreadNo = 0;
  const setAllRead = () => {
    const temp = notifications.map((item) => {
      let readitem = { ...item, unread: false };
      return readitem;
    });
    setNotification(temp);
  };
  notifications.forEach((item) => {
    if (item.unread == true) {
      unreadNo += 1;
    }
  });
  return (
    <>
      <header className="header">
        <h1>
          Notifications <span>{unreadNo}</span>
        </h1>
        <p onClick={setAllRead}>Mark all as read</p>
      </header>
    </>
  );
};
export default NotifHeader;
