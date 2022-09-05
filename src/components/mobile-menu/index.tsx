import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import menu from "./assets/menu.svg";
import select from "./assets/arrow-select.svg";

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
                <div className="mobile-menu__select">
                  <span
                    onClick={toggleDropdown}
                    className="mobile-menu__dropdown-title"
                  >
                    Услуги
                  </span>
                  <img src={select} alt="select" />
                </div>
                {isOpenDropdown && (
                  <div className="mobile-menu__dropdown-links">
                    <NavLink
                      activeClassName="selected"
                      className="mobile-menu__dropdown-link"
                      to="services/interior-decoration"
                    >
                      Декорирование интерьера
                    </NavLink>
                    <NavLink
                      activeClassName="selected"
                      className="mobile-menu__dropdown-link"
                      to="/services/interior-design"
                    >
                      Дизайн интерьеров
                    </NavLink>
                    <NavLink
                      activeClassName="selected"
                      className="mobile-menu__dropdown-link"
                      to="/services/furniture-manufacturing"
                    >
                      Изготовление мебели на заказ
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/interiors"
              >
                Интерьеры
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/decoration"
              >
                Декорирование
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/contact"
              >
                Контакты
              </NavLink>
              <NavLink
                activeClassName="selected"
                className="mobile-menu__link"
                to="/questionnaire"
              >
                Заполнить анкету
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
