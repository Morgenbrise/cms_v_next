import { auth } from "@/auth";
import LeftMenu from "../LeftMenu";

const MainWrapper = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <div className="h-full flex flex-col ">
      <div className="w-full h-full flex xl:max-w-[1320px] transition-[wrapper] mx-auto px-[30px]">
        {session?.user && <LeftMenu />}
        <div className="w-full h-full mt-6">{children}</div>
      </div>
    </div>
  );
};

export default MainWrapper;
