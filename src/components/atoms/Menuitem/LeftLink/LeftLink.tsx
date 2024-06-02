import Link from "next/link";

type LeftLinkType = {
  children: string;
  link: string;
};

const LeftLink = (props: LeftLinkType) => {
  return (
    <div className="block py-1 px-0">
      <Link
        className="flex items-center flex-grow text-[#4B5675] font-semibold py-3 px-4"
        href={props.link}
      >
        {props.children}
      </Link>
    </div>
  );
};

export default LeftLink;
