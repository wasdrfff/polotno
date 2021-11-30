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
        <a><img src={pinterest} alt="pinterest" /></a>
        <a><img src={inst} alt="instagram" /></a>
        <a><img src={telegram} alt="telegram" /></a>
      </div>

      <a>
        <span>
          <img src={phone} alt="handy" />
        +79126187687
        </span>
      </a>
      <a>
        <span>
          <img src={email} alt="mail" />
          malykhm@mail.ru
        </span>
      </a>
      <span>© полотно 2021</span>
    </footer>
  );
};
