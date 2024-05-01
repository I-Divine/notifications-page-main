const Notification = () => {
  return (
    <div className="notification">
      <img src="/images/avatar-angela-gray.webp" alt="" />
      <div>
        <div className="notif-details">
          <span className="notif-sender">Angela Gray</span>
          <span className="notif-action">reacted to your post</span>
          <span className="notif-item">My first tournament today!</span>
          <p className="notif-time">1m ago</p>
        </div>
        <div className="notif-msg">
          <p>
            Hello thank you for setting up the chess club. I've been a member
            for a few weeks now and I'm already having lots of fun and improving
            my game.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Notification;
