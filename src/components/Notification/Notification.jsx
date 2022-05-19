import "./notification.css";
import { LikeNotification, CommentNotification } from "components";
export const Notification = () => {
  return (
    <>
      <LikeNotification />
      <CommentNotification />
    </>
  );
};
