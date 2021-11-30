import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const clickButton = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <div className="header__content">
        <img src="" alt="logo" />
        <button onClick={clickButton}>бергер</button>
        <div className="header__menu">
          <Link to="/">услуги</Link>
          <Link to="/">портфолио</Link>
          <Link to="/">магазин</Link>
          <Link to="/contact">контакты</Link>
        </div>
        {showMenu && (
          <div className="header__modal-menu">
            <Link to="/">услуги</Link>
            <Link to="/">портфолио</Link>
            <Link to="/">магазин</Link>
            <Link to="/contact">контакты</Link>
          </div>
        )}
      </div>
    </header>
  );
};
