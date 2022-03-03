import { Link } from "react-router-dom";
import { MobileMenu } from "../mobile-menu";
import { Dropdown } from "../dropdown";
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
          <Dropdown title="услуги">
            <Link to="/interior-design">Дизайн интерьеров</Link>
            <Link to="/services">Декорирование интерьеров</Link>
            <Link to="/">Изготовление мебели на заказ</Link>
          </Dropdown>
          <Link to="/portfolio">портфолио</Link>
          <Link to="/">магазин</Link>
          <Link to="/contact">контакты</Link>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};
