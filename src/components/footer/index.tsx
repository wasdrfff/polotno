import "./style.scss";
import inst from "./assets/inst.svg";
import pinterest from "./assets/pinterest.svg";
import telegram from "./assets/telegram.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
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
      <a href="tel:+78142332211">
        <span>
          <img src={phone} alt="tel" />
          +79126187687
        </span>
      </a>
      <a href="mailto:malykhm@mail.ru">
        <span>
          <img src={email} alt="mail" />
          malykhm@mail.ru
        </span>
      </a>
      <span>© полотно 2021</span>
    </footer>
  );
};
