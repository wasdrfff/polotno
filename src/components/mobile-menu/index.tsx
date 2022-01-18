import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import menu from "./assets/menu.svg";
import close from "./assets/close.svg";
import { Dropdown } from "../dropdown";

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeModal = () => {
    setShowMenu(false);
  };
  const openModal = () => {
    setShowMenu(true);
  };
  return (
    <div className="mobile-menu">
      <img src={menu} alt="menu" onClick={openModal} />

      {showMenu && (
        <div className="mobile-menu__modal-menu">
          <header>
            <img src="" alt="logo" />
            <img src={close} alt="close" onClick={closeModal} />
          </header>
          <Dropdown title="услуги">
            <Link to="/services">Декорирование интерьера</Link>
            <Link to="/decor">Дизайн интерьера</Link>
          </Dropdown>
          <Link to="/portfolio">портфолио</Link>
          <Link to="/">магазин</Link>
          <Link to="/contact">контакты</Link>
        </div>
      )}
    </div>
  );
};
