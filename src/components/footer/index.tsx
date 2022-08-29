import "./style.scss";
import inst from "./assets/inst.svg";
import pinterest from "./assets/pinterest.svg";
import telegram from "./assets/telegram.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import logo from "../header/assets/images/logo.svg";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from "../button";

export const Footer = () => {
  const history = useHistory();
  const sendToTheQuestionnaire = () => {
    history.push("/questionnaire");
    console.log(history);
  };
  const sendToContacts = () => {
    history.push("/contact");
    console.log(history);
  };
  return (
    <footer className="footer">
      <img src={logo} alt="logo" />
      <div className="footer__navigation">
        <NavLink to="/">Услуги</NavLink>
        <NavLink to="/">Интерьеры</NavLink>
        <NavLink to="/">Декорирование</NavLink>
      </div>
      <div className="footer__content">
        <div className="footer__social">
          <a href="pinterest.com">
            <img src={pinterest} alt="pinterest" />
          </a>
          <a href="instagram.com">
            <img src={inst} alt="instagram" />
          </a>
          <a href="web.telegram.org">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
        <a href="tel:+79126187687" className="footer__link">
          <img src={phone} alt="tel" />
          <span className="footer__text">+79126187687</span>
        </a>
        <a href="mailto:malykhm@mail.ru" className="footer__link">
          <img src={email} alt="mail" />
          <span className="footer__text">malykhm@mail.ru</span>
        </a>
      </div>
      <div className="footer__actions">
        <Button onClick={sendToContacts}>Заказать обратный звонок</Button>
        <Button onClick={sendToTheQuestionnaire}>Заполнить анкету</Button>
      </div>
    </footer>
  );
};
