type MenuContentType = {
  children: string;
};

const MenuContent = (props: MenuContentType) => {
  return (
    <div className="block py-1 px-0">
      <span className="text-[#99A1B7] font-semibold transform py-3 px-4">
        {props.children}
      </span>
    </div>
  );
};

export default MenuContent;
