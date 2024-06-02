import HeaderIcon from "@/components/molecules/HeaderIcon";
import HeaderMenu from "@/components/molecules/HeaderMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-[110px] border-b border-solid border-[#f1f1f4] mx-7">
      <div className="flex w-full xl:max-w-[1320px] items-center justify-between mx-auto px-[30px]">
        <span className="text-xl font-extrabold text-gray-600">
          <Link href="/dashboard">CMS</Link>
        </span>

        {/* <HeaderMenu /> */}

        <HeaderIcon />
      </div>
    </header>
  );
};

export default Header;
