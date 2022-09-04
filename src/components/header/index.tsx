import { Link } from "react-router-dom";
import { MobileMenu } from "../mobile-menu";
import logo from "./assets/images/logo.svg";
import "./style.scss";
import select from "./assets/images/arrow-bottom.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" id="logo">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <div className="header__menu">
          <div className="header__item">
            <span className="item__select">Услуги</span>
            <img src={select} alt="select" />
            <div className="item__links">
              <Link to="/services/interior-design">Дизайн интерьеров</Link>
              <Link to="/services/interior-decoration">
                Декорирование интерьеров
              </Link>
              <Link to="/services/furniture-manufacturing">
                Изготовление мебели на заказ
              </Link>
            </div>
          </div>
          <Link to="/interiors">Интерьеры</Link>
          <Link to="/decoration">Декорирование</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/questionnaire">Заполнить анкету</Link>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};
