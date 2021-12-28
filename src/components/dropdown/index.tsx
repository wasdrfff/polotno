import { useState } from "react";
// import { Link } from "react-router-dom";
import "./style.scss";

type TProps = {
  title: string;
  children: JSX.Element[];
};

export const Dropdown = (props: TProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const TogleDropdownList = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  return (
    <div className="dropdown">
      <span onClick={TogleDropdownList}>{props.title}</span>
      {isOpenDropdown && (
        <div className="dropdown__links">{props.children}</div>
      )}
    </div>
  );
};
