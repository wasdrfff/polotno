import "./style.scss";
import inst from "./images/inst.svg";
import pinterest from "./images/pinterest.svg";
import telegram from "./images/telegram.svg";
import phone from "./images/phone.svg";
import email from "./images/email.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <img src={pinterest} alt="pinterest" />
        <img src={inst} alt="instagram" />
        <img src={telegram} alt="telegram" />
      </div>

      <span>
        <img src={phone} alt="handy" />
        +79126187687
      </span>
      <span>
        <img src={email} alt="mail" />
        malykhm@mail.ru
      </span>
      <span>© полотно 2021</span>
    </footer>
  );
};
