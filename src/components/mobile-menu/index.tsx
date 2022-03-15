import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import menu from "./assets/menu.svg";
import close from "./assets/close.svg";
import { Dropdown } from "../dropdown";
import logo from "../header/assets/images/logo.svg";
export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeModal = () => {
    setShowMenu(false);
  };
  const openModal = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="mobile-menu">
      <img src={menu} alt="menu" onClick={openModal} />

      {showMenu && (
        <div className="mobile-menu__modal-menu">
          <header>
            {/* <img src={logo} alt="logo" /> */}
            <img src={close} alt="close" onClick={closeModal} />
          </header>
          <div className="mobile-menu__content">
            <div className='mobile-menu__dropdown'>
            <Dropdown title="услуги">
              <Link to="/services">Декорирование интерьера</Link>
              <Link to="/decor">Дизайн интерьера</Link>
              <Link to="/furniture-manufacturing">
                Изготовление мебели на заказ
              </Link>
            </Dropdown>
            </div>
            <Link to="/portfolio">портфолио</Link>
            <Link to="/">магазин</Link>
            <Link to="/contact">контакты</Link>
          </div>
        </div>
      )}
    </div>
  );
};
