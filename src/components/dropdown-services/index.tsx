import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const DropdownServices = () => {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const TogleDropdownList = () => {
    setIsOpenServices(!isOpenServices);
  };
  return (
    <div className="dropdown-services">
      <span onClick={TogleDropdownList}>услуги</span>

      {isOpenServices && (
        <div className="dropdown-services__links">
          <Link to="/services">Декорирование интерьера</Link>
          <Link to="/decor">Дизайн интерьера</Link>
        </div>
      )}
    </div>
  );
};
