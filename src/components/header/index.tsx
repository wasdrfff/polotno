import { Link } from "react-router-dom";
import { MobileMenu } from "../mobile-menu";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img src="" alt="logo" />
        <div className="header__menu">
          <Link to="/">услуги</Link>
          <Link to="/">портфолио</Link>
          <Link to="/">магазин</Link>
          <Link to="/contact">контакты</Link>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};
