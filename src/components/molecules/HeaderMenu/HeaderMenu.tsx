"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const liStyle = "mx-1 text-base text-gray-500 font-semibold mx-4 my-3";

const HeaderMenu = () => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <article>
      {user && (
        <ul className="flex flex-wrap list-none justify-between">
          <li className={`${liStyle}`}>
            <Link href={"/webtoon"}>목록</Link>
          </li>
          <li className={`${liStyle}`}>보류</li>
          <li className={`${liStyle}`}>통계</li>
          <li className={`${liStyle}`}>정산</li>
        </ul>
      )}
    </article>
  );
};

export default HeaderMenu;
