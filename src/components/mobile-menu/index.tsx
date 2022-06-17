import { useState } from "react";
import { Link } from "react-router-dom";
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
                  <Link to="/services">Декорирование интерьера</Link>
                  <Link to="/decor">Дизайн интерьера</Link>
                  <Link to="/furniture-manufacturing">
                    Изготовление мебели на заказ
                  </Link>
                </Dropdown>
                <Dropdown title="портфолио">
                  <Link to="/portfolio/interiordesign">Дизайн интерьеров</Link>
                  <Link to="/portfolio">Декорирование интерьеров</Link>
                </Dropdown>
              </div>
              <Link to="/">магазин</Link>
              <Link to="/contact">контакты</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
