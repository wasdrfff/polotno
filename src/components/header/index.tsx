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
            <span className="item__select">услуги</span>
            <img src={select} alt="select" />
            <div className="item__links">
              <Link to="/interior-design">дизайн интерьеров</Link>
              <Link to="/interior-decoration">декорирование интерьеров</Link>
              <Link to="/furniture-manufacturing">
                изготовление мебели на заказ
              </Link>
            </div>
          </div>
          <Link to="/portfolio/interiordesign">интерьеры</Link>
          <Link to="/decoration">декорирование</Link>
          <Link to="/contact">контакты</Link>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};
