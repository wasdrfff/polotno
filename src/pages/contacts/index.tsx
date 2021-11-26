import { ContactCard } from "../../components/contact-card/contact-card"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import camera from "./images/camera.svg"
import cup from "./images/cup.svg"
import "./style.css"
export const ContactsPage = () => {
    return (
        <div>
            <Header />
            <div>
                <div className="contacts-page__title">
                    <h3>
                        СТУДИЯ ДИЗАЙНА И ДЕКОРИРОВАНИЯ ИНТЕРЬЕРА
                    </h3>
                </div>
                <div className="contacts-page__wrapper">
                    <main className="contacts-page__information">
                        <h3>
                            Связаться с Нами
                        </h3>
                        <h4>+79126187687</h4>
                        <h5>malykhm@mail.ru</h5>
                        <span>
                            Вам нужна консультация?
                        </span>
                        <span>
                            Вы хотите обсудить организационные вопросы?
                        </span>
                        <span>
                            Позвоните или напишите нами и мы договоримся о встрече
                        </span>
                        <p>
                            Можем провести консультацию <b>онлайн</b>
                        </p>
                        <span>
                            Можем встретиться с Вами <b>лично</b> в удобном для вас месте.
                        </span>
                        <span>Режим работы</span>
                        <div className="contacts-page__blocks">
                        <ContactCard 
                        title="Позвонить"
                        subtitle="встретиться онлайн "
                        days="-ежедневно"
                        time="c 10.00-19.00"
                        img={camera}
                        />
                        <ContactCard
                        title="Консультация очно"
                        subtitle=" "
                        days="-пн-пт"
                        time="с 10.00-19.00"
                        img={cup}
                        />
                        </div>
                        <p>
                            Выезд на первую встречу и замеры бесплатно.
                        </p>
                        <div className="contacts-page__requisites">
                            <h2>
                                Реквизиты:
                            </h2>
                            <span>
                                ИП Малых М.В.
                            </span>
                            <span>
                                ИНН 667207874154
                            </span>
                            <span>
                                ОГРНИП 3216658000097701
                            </span>
                            <span>
                                Р/счет:40802810001500181880
                            </span>
                            <span>
                                Банк: ТОЧКА ПАО БАНКА «ФК ОТКРЫТИЕ» г.Москва
                            </span>
                            <span>
                                БИК:044525999
                            </span>
                            <span>
                                К/счет:30101810845250000999
                            </span>
                        </div>
                    </main>
                    <main className="contacts-page__form">
                        <h3>
                            Пишите нам
                        </h3>
                        <div className="contacts-page__content">
                        <p>
                            Оставьте заявку и мы свяжемся с Вами в течение 1&nbsp;рабочего дня
                        </p>
                        <input placeholder="Телефон" />
                        <input placeholder="Электронная почта" />
                        <input placeholder="Сообщение" />
                       
                        <button>ОТПРАВИТЬ СООБЩЕНИЕ</button>
                        <p>
                            *Мы не передаем ваши персональные данные третьим лицам
                        </p>
                        <p>
                            **Отправляю сообщение вы принимаете условия
                            нашей <b>политики конфидециальности.</b>
                        </p>
                        <button>
                            ЗАПОЛНИТЬ АНКЕТУ
                        </button>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}