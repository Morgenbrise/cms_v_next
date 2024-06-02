import { IoIosNotificationsOutline } from "react-icons/io";
import IconBtn from "../atoms/IconBtn";
import { IconType } from "./iconType";

const NotificationsIcon = (props: IconType) => {
  return (
    <IconBtn onClick={props.onClick} onMouseOver={props.onMouseOver}>
      <IoIosNotificationsOutline className="w-6 h-6" />
    </IconBtn>
  );
};

export default NotificationsIcon;
