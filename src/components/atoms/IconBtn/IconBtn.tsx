type IconBtnType = {
  children: JSX.Element;
  onClick: () => void;
  onMouseOver?: () => void;
};

const IconBtn = (props: IconBtnType) => {
  return (
    <button onClick={props.onClick} onMouseOver={props.onMouseOver}>
      {props.children}
    </button>
  );
};

export default IconBtn;
