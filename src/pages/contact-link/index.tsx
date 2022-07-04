import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import emailjs from "@emailjs/browser";
import email from "./assets/images/email.svg";
import phone from "./assets/images/phone.svg";
import telegram from "./assets/images/telegram.svg";
import cup from "./assets/images/cup.png";
import "./style.scss";
import { Button } from "../../components/button";

export const ContactPage = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cfbbb8x",
        "template_17halig",
        e.target,
        "_G1NABxE2QnPGrTHI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Header />
      <div className="contact-page">
        <main className="contact-page__content">
          <div className="contact-page__contact-form-wrapper">
            <form onSubmit={sendEmail} className="contact-page__contact-form">
              <span className="contact-page__title">
                Оставьте заявку (мы свяжемся с вами в течение 1 рабочего дня)
              </span>
              <input required placeholder="Имя" name="name" />
              <input required placeholder="+7 (999)" name="phone" />
              <input required placeholder="E-mail" name="email" />
              <textarea
                cols={80}
                rows={4}
                placeholder="Введите сообщение..."
                id="message"
                name="message"
              />
              <Button></Button>
            </form>
          </div>
          <div className="contact-page__cards-wrapper">
            <span className="contact-page__title-card">Режим работы:</span>
            <div className="contact-page__cards">
              <div className="contact-page__card">
                <span>Позвонить/</span>
                <span>встретиться онлайн</span>
                <span>ежедневно</span>
                <span>10.00-19.00</span>
                <div className="contact-page__card-contacts">
                  <img src={email} alt="email" />
                  <img src={phone} alt="phone" />
                  <img src={telegram} alt="telegram" />
                </div>
              </div>
              <div className="contact-page__card">
                <span>Консультация очно</span>
                <span>пн-пт</span>
                <span>10.00-19.00</span>
                <img src={cup} alt="cup" className="contact-page__card-image" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
