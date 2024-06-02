import LeftLink from "@/components/atoms/Menuitem/LeftLink";
import MenuContent from "@/components/atoms/Menuitem/MenuContent";

const LeftMenu = () => {
  return (
    <article className="w-[225px] left">
      <div className="h-[811px] relative pl-0 my-5">
        <div className="w-fill flex flex-col m-0 p-0 text-base">
          <MenuContent>목록</MenuContent>
          <LeftLink link="/webtoon">도서목록</LeftLink>
        </div>
      </div>
    </article>
  );
};

export default LeftMenu;
