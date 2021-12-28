import { Link } from "react-router-dom";
import { MobileMenu } from "../mobile-menu";
import { DropdownServices } from "../dropdown-services";
import logo from "./assets/images/logo.svg";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__menu">
          <DropdownServices />
          {/* 
            Эта хрень должна быть переиспользуемой.  
            Должно быть вот так:
            <Dropdown title="услуги">
              <Link to="/services">Декорирование интерьера</Link>
              <Link to="/decor">Дизайн интерьера</Link>
            </Dropdown>
          */}
          <Link to="/portfolio">портфолио</Link>
          <Link to="/">магазин</Link>
          <Link to="/contact">контакты</Link>
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};
