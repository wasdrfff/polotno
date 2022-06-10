import { useState } from "react";
import "./style.scss";

type TProps = {
  title: string;
  children: JSX.Element[];
};

export const Dropdown = ({ title, children }: TProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const toggleDropdownList = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div className="dropdown">
      <span onClick={toggleDropdownList}>{title}</span>
      {isOpenDropdown && <div className="dropdown__links">{children}</div>}
    </div>
  );
};
