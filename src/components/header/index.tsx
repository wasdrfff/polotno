import {Link} from "react-router-dom";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <img src="" alt="logo" />
      <div className="header__content">
        <Link to="/"><span>услуги</span></Link>
        <Link to="/"><span>портфолио</span></Link>
        <Link to="/"><span>магазин</span></Link>
        <Link to="/contact"><span>контакты</span></Link>
      </div>
    </header>
  );
};
