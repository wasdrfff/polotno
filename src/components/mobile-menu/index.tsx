import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import menu from "./assets/menu.svg";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const toggleModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
      setIsOpenDropdown(false);
    }
  };
  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <div className="mobile-menu">
      <img src={menu} alt="menu" onClick={toggleModal} />
      {isOpen && (
        <div className="mobile-menu__wrapper" onClick={toggleModal}>
          <div className="mobile-menu__modal-menu">
            <div className="mobile-menu__menu-image">
              <img src={menu} alt="menu" onClick={toggleModal} />
            </div>
            <div className="mobile-menu__content">
              <div className="mobile-menu__dropdown">
                <span
                  onClick={toggleDropdown}
                  className="mobile-menu__dropdown-title"
                >
                  услуги
                </span>
                {isOpenDropdown && (
                  <div className="mobile-menu__dropdown-links">
                    <NavLink
                      activeClassName="selected"
                      className="mobile-menu__dropdown-link"
                      to="/services"
                    >
                      Декорирование интерьера
                    </NavLink>
                    <NavLink
                      activeClassName="selected"
                      className="mobile-menu__dropdown-link"
                      to="/interior-design"
                    >
                      Дизайн интерьеров
                    </NavLink>
                    <NavLink
                      activeClassName="selected"
                      className="mobile-menu__dropdown-link"
                      to="/furniture-manufacturing"
                    >
                      Изготовление мебели на заказ
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/interiordesign"
              >
                интерьеры
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/portfolio"
              >
                декорирование
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
