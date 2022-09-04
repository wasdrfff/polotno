import "./style.scss";
import inst from "./assets/inst.svg";
import pinterest from "./assets/pinterest.svg";
import telegram from "./assets/telegram.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import { FooterComponent, FooterContent, Social } from "./footer-styled";

export const Footer = () => {
  return (
    <FooterComponent>
      <FooterContent>
        <Social>
          <a href="pinterest.com">
            <img src={pinterest} alt="pinterest" />
          </a>
          <a href="instagram.com">
            <img src={inst} alt="instagram" />
          </a>
          <a href="web.telegram.org">
            <img src={telegram} alt="telegram" />
          </a>
        </Social>
        <a href="tel:+79126187687" className="link">
          <img src={phone} alt="tel" />
          <span className="footer__text">+79126187687</span>
        </a>
        <a href="mailto:malykhm@mail.ru" className="link">
          <img src={email} alt="mail" />
          <span className="text">malykhm@mail.ru</span>
        </a>
        <span>©полотно 2021</span>
      </FooterContent>
    </FooterComponent>
  );
};
