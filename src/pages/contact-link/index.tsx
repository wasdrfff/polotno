import { ContactCard } from "../../components/contact-card/index";
import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import camera from "../contacts/assets/camera.svg";
import cup from "../contacts/assets/cup.svg";
import "./style.scss";
export const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-page">
        <main className="contact-page__main">
          <h2>Контакты</h2>
          <h3>+79126187687</h3>
          <h3>malykhm@mail.ru</h3>
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
          <h2>Пишите нам:</h2>
          <span>
            Оставьте заявку и мы свяжемся с вами в течение 1 рабочего дня
          </span>
        </main>
      </div>
      <Footer />
    </div>
  );
};
