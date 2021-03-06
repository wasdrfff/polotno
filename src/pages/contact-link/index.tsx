import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import emailjs from "@emailjs/browser";
import imgMail from "./assets/images/email.svg";
import imgPhone from "./assets/images/phone.svg";
import telegram from "./assets/images/telegram.svg";
import cup from "./assets/images/cup.svg";
import "./style.scss";
import { Button } from "../../components/button";
import { useState } from "react";
import { Input } from "../../components/input";

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
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validationPhone = (phone: string) => {
    const regPhone = /\+7\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d/;
    if (!regPhone.test(phone)) {
      return "Введите номер телефона";
    }
    return "";
  };

  const validationEmail = (email: string) => {
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      return "Введите верный email";
    }
    return "";
  };

  const validationName = (name: string) => {
    if (!name) {
      return "Введите имя";
    }
    return "";
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
              <Input
                name="name"
                value={name}
                onChange={setName}
                placeholder="Имя"
                getErrorMessage={validationName}
              ></Input>
              <Input
                mask={"+7 (999) 999-99-99"}
                name="phone"
                value={phone}
                onChange={setPhone}
                getErrorMessage={validationPhone}
                placeholder="+7 (999)"
              ></Input>
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="E-mail"
                onChange={setEmail}
                getErrorMessage={validationEmail}
              ></Input>
              <textarea
                cols={80}
                rows={4}
                placeholder="Введите сообщение..."
                id="message"
                name="message"
              />
              <Button>
                <>Отправить сообщение</>
              </Button>
            </form>
          </div>
          <div className="contact-page__cards-wrapper">
            <div className="contact-page__cards">
              <span className="contact-page__title-cards">Режим работы:</span>
              <div className="contact-page__card">
                <span>Позвонить/</span>
                <span>встретиться онлайн</span>
                <span>ежедневно</span>
                <span>10.00-19.00</span>
                <div className="contact-page__card-contacts">
                  <img src={imgMail} alt="email" />
                  <img src={imgPhone} alt="phone" />
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
