import { CiLogout } from "react-icons/ci";
import IconBtn from "../atoms/IconBtn";
import { IconType } from "./iconType";

const LogoutIcon = (props: IconType) => {
  return (
    <IconBtn onClick={props.onClick} onMouseOver={props.onMouseOver}>
      <CiLogout className="w-6 h-6" />
    </IconBtn>
  );
};

export default LogoutIcon;
