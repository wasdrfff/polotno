import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import menu from "./assets/menu.svg";
import { Text } from "../text";

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
            <div className="mobile-menu__menu-image">
              <img src={menu} alt="menu" onClick={toggleModal} />
            </div>
            <div className="mobile-menu__content">
              <Text variant="mMob" textColor="textColor">
                <NavLink
                  activeClassName="selected"
                  className="mobile-menu__dropdown-link"
                  to="/services/interior-decoration"
                >
                  Дизайн интерьера
                </NavLink>
              </Text>

              <Text variant="mMob" textColor="textColor">
                <NavLink
                  activeClassName="selected"
                  className="mobile-menu__dropdown-link"
                  to="/services/interior-design"
                >
                  Декорирование интерьера
                </NavLink>
              </Text>

              <Text variant="mMob" textColor="textColor">
                <NavLink
                  activeClassName="selected"
                  className="mobile-menu__dropdown-link"
                  to="/services/furniture-manufacturing"
                >
                  Изготовление мебели на заказ
                </NavLink>
              </Text>

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
