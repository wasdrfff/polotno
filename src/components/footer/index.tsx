import "./style.scss";
import inst from "./assets/inst.svg";
import pinterest from "./assets/pinterest.svg";
import telegram from "./assets/telegram.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";

export const Footer = () => {
  return (
    <footer className="footer">
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
        <a href="tel:+78142332211" className="footer__link">
          <img src={phone} alt="tel" />
          <span className="footer__text">+79126187687</span>
        </a>
        <a href="mailto:malykhm@mail.ru" className="footer__link">
          <img src={email} alt="mail" />
          <span className="footer__text">malykhm@mail.ru</span>
        </a>
        <span className="footer__text">© полотно 2021</span>
      </div>
    </footer>
  );
};
