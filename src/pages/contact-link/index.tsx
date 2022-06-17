import { ContactCard } from "../../components/contact-card/index";
import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import emailjs from "@emailjs/browser";
import camera from "./assets/images/camera.svg";
import cup from "./assets/images/cup.svg";
import "./style.scss";

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
    <div>
      <Header />
      <div className="contact-page">
        <main className="contact-page__main">
          <span>Контакты</span>
          <span>+79126187687</span>
          <span>malykhm@mail.ru</span>
          <p>Режим работы</p>
          <div className="contact-page__cards">
            <ContactCard
              title="Позвонить"
              subtitle="встретиться онлайн "
              days="-ежедневно"
              time="c 10.00-19.00"
              img={camera}
            />
            <ContactCard
              title="Консультация очно"
              subtitle="&nbsp;"
              days="-пн-пт"
              time="с 10.00-19.00"
              img={cup}
            />
          </div>
          <span>Пишите нам:</span>
          <span>
            Оставьте заявку и мы свяжемся с вами в течение 1 рабочего дня
          </span>
          <form onSubmit={sendEmail} className="contact-page__form">
            <input required placeholder="Имя" name="name" />
            <input required placeholder="Телефон" name="phone" />
            <input required placeholder="Электронная почта" name="email" />
            <input placeholder="Сообщение" id="message" name="message" />
            <button>Отправить сообщение</button>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};
