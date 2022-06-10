import { Link } from "react-router-dom";
import { MobileMenu } from "../mobile-menu";
import logo from "./assets/images/logo.svg";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" id="logo">
          <img src={logo} alt="logo"></img>
        </Link>
        <div className="header__menu">
          <div className="header__item">
            <span>услуги</span>
            <div className="item__links">
              <Link to="/interior-design">Дизайн интерьеров</Link>
              <Link to="/services">Декорирование интерьеров</Link>
              <Link to="/furniture-manufacturing">
                Изготовление мебели на заказ
              </Link>
            </div>
          </div>
          <div className="header__item">
            <span>портфолио</span>
            <div className="item__links">
              <Link to="/portfolio/interiordesign">Дизайн интерьеров</Link>
              <Link to="/portfolio">Декорирование интерьера</Link>
            </div>
          </div>
          <Link to="/">магазин</Link>
          <Link to="/contact">контакты</Link>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};
