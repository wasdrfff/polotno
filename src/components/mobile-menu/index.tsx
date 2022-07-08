import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import menu from "./assets/menu.svg";
import close from "./assets/close.svg";
import { Dropdown } from "../dropdown";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="mobile-menu">
      <img src={menu} alt="menu" onClick={toggleModal} />
      {isOpen && (
        <div className="mobile-menu__wrapper" onClick={toggleModal}>
          <div className="mobile-menu__modal-menu">
            <header>
              <img src={close} alt="close" onClick={toggleModal} />
            </header>
            <div className="mobile-menu__content">
              <div className="mobile-menu__dropdown">
                <Dropdown title="услуги">
                  <NavLink
                    activeClassName="selected"
                    className="mobile-menu__link"
                    to="/services"
                  >
                    Декорирование интерьера
                  </NavLink>
                  <NavLink
                    activeClassName="selected"
                    className="mobile-menu__link"
                    to="/decor"
                  >
                    Дизайн интерьера
                  </NavLink>
                  <NavLink
                    activeClassName="selected"
                    className="mobile-menu__link"
                    to="/furniture-manufacturing"
                  >
                    Изготовление мебели на заказ
                  </NavLink>
                </Dropdown>
              </div>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/interiordesign"
              >
                дизайн интерьеров
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/portfolio"
              >
                декорирование интерьеров
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/contact"
              >
                контакты
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
