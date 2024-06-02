"use client";

import IconDashedBox from "@/components/atoms/IconDashedBox";
import LogoutIcon from "@/components/icon/LogoutIcon";
import NotificationsIcon from "@/components/icon/NotificationsIcon";
import UserIcon from "@/components/icon/UserIcon";
import { signOut, useSession } from "next-auth/react";

const HeaderIcon = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <article className="flex justify-between">
      {user && (
        <>
          <IconDashedBox>
            <UserIcon onClick={() => {}} />
          </IconDashedBox>

          <IconDashedBox>
            <NotificationsIcon onClick={() => {}} />
          </IconDashedBox>

          <IconDashedBox>
            <LogoutIcon
              onClick={() => {
                signOut();
              }}
            />
          </IconDashedBox>
        </>
      )}
    </article>
  );
};

export default HeaderIcon;
