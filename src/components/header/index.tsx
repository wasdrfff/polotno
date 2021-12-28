import { Link } from "react-router-dom";
import { MobileMenu } from "../mobile-menu";
import "./style.scss";
import logo from "./assets/images/logo.svg";
import { DropdownServices } from "../dropdown-services";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__menu">
          <DropdownServices />
          <Link to="/portfolio">портфолио</Link>
          <Link to="/">магазин</Link>
          <Link to="/contact">контакты</Link>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};
