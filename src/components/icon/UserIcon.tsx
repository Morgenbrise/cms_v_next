import { CiUser } from "react-icons/ci";
import IconBtn from "../atoms/IconBtn";
import { IconType } from "./iconType";

const UserIcon = (props: IconType) => {
  return (
    <IconBtn onClick={props.onClick} onMouseOver={props.onMouseOver}>
      <CiUser className="w-6 h-6" />
    </IconBtn>
  );
};

export default UserIcon;
