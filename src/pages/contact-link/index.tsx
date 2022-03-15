import { ContactCard } from "../../components/contact-card/index";
import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import camera from "./assets/images/camera.svg";
import cup from "./assets/images/cup.svg";
import "./style.scss";

export const ContactPage = () => {
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
          <div className="contact-page__form">
            <input placeholder="Имя" />
            <input placeholder="Телефон" />
            <input placeholder="Электронная почта" />
            <input placeholder="Сообщение" id="message" />
            <button>Отправить сообщение</button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
