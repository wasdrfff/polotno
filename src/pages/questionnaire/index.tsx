import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import "./style.scss";

export const QuestionnairePage = () => {
  return (
    <div className="questionnaire-page">
      <Header />
      <div className="questionnaire-page__content">
        <main className="questionnaire-page__main">
          <p>АНКЕТА С ПОЖЕЛАНИЯМИ</p>
          <ul>
            <li>вы можете заполнить или отправить анкету до консультации</li>
            <li>мы будем более информированы</li>
            <li>вы можете менять свои пожелания после отправки анкеты</li>
          </ul>
          <p>Электронная почта:</p>
          <input placeholder="Ваш адрес электронный почты" />
          <p>Состав семьи</p>
          <span>
            Коротко опишите состав семьи, которая будет проживать в
            квартире/доме, включая домашних животных
          </span>
          <input placeholder="Мой ответ" />
          <p>В планировке предусмотреть комнаты:</p>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Кухня-гостинная</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Кухня</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Гостинная</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Спальня 1</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Спальня 2</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Детская 1</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Детская 2</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Кабинет</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Гостевая 1</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Гостевая 2</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Санузел хозяйский раздельный</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Санузел рядом с обеденной зоной</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Санузел гостевой</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Гардеробная</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Кладовая</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Прачечная</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Прихожая</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Зона отдыха на балконе/лоджии</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Рабочая зона на балконе/лоджии</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Другое</span>
          </div>
          <input type="text" placeholder="Мой ответ" />
          <p>
            Подробно опишите перепланировку,которую хотелось бы сделать, если
            перепланировки не будет оставьте графу пустой
          </p>
          <input type="text" placeholder="Мой ответ" />
          <p>Стилевые предпочтения:</p>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>В приоритете удобство и функциональность</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Хочу найти баланс между красотой и практичностью</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Хочу нейтральное помещение</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>Хочу яркие акценты</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>В приоритете эстетика,много декора</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>На усмотрение дизайнера</span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>
              У меня есть несколько идей,хочу воплотить их в интерьере
            </span>
          </div>
          <div className="questionnaire-page__row">
            <input type="checkbox" />
            <span>
              Хочу,чтобы дизайн-проект разработали с моим минимальным участием
            </span>
          </div>
          <p>
            *Пожелания и предпочтения расчитаны для жилого помещения. В случае
            если помещение общественное, пожелания обсуждаются на консультации.
          </p>
          <div className="questionnaire-page__actions">
            <button>Очистить форму</button>
            <button>Отправить анкету</button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
