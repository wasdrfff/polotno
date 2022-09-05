import { useCallback, useRef, useState } from "react";
import { Button } from "../../components/button";
import emailjs from "@emailjs/browser";
import "./style.scss";
import { roomsCells } from "./data";
import { stylesCells } from "./data";

export const QuestionnairePage = () => {
  const [isOpenInput, setIsOpenInput] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleInput = () => {
    setIsOpenInput(!isOpenInput);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cfbbb8x",
      "template_m81z2nd",
      e.target,
      "_G1NABxE2QnPGrTHI"
    );
    resetForm();
    setIsOpenInput(false);
  };
  const resetForm = useCallback(() => {
    if (formRef?.current?.reset) {
      formRef?.current?.reset();
    }
  }, []);
  return (
    <div>
      <div className="questionnaire-page">
        <h2 className="questionnaire-page__title">Анкета с пожеланиями </h2>
        <div className="questionnaire-page__list">
          <ul>
            <li>Вы можете заполнить или отправить антеку до консультации</li>
            <li>Мы будем более информированы</li>
            <li>Вы можете менять свои пожелания после отправки</li>
          </ul>
        </div>
        <div className="questionnaire-page__form-wrapper">
          <form
            onSubmit={sendEmail}
            className="questionnaire-page__form"
            id="questionnaire"
            ref={formRef}
          >
            <input placeholder="E - mail" type="email" required name="email" />
            <div className="questionnaire-page__block">
              <span>
                1. Коротко опишите состав семьи, которая будет проживать в
                квартире /доме, включая домашних животных:
              </span>
              <textarea name="family" id="family" placeholder="Состав семьи" />
            </div>
            <span>2. В планировке предусмотрены комнаты:</span>
            <div className="questionnaire-page__rooms">
              {roomsCells.map((roomsCell) => {
                return (
                  <div className="questionnaire-page__row">
                    <input
                      type="checkbox"
                      id={roomsCell.name}
                      name={roomsCell.name}
                      value={roomsCell.value}
                    />
                    <label htmlFor={roomsCell.name}>{roomsCell.value}</label>
                  </div>
                );
              })}
              <div className="questionnaire-page__row">
                <input type="checkbox" onClick={toggleInput} id="othercheck" />
                <label htmlFor="othercheck">Другое </label>
                {isOpenInput && (
                  <textarea placeholder="Мой ответ" name="other" id="other" />
                )}
              </div>
            </div>
            <div className="questionnaire-page__block">
              <span>
                3. Подробно опишите перепланировку, которую хотелось бы сделать
                (если перепланировки не будет, оставьте графу пустой):
              </span>
              <textarea name="planning" placeholder="Мой ответ" />
            </div>
            <span>4. Стилевые предпочтения:</span>
            <div className="questionnaire-page__styles">
              {stylesCells.map((stylesCell) => {
                return (
                  <div className="questionnaire-page__row">
                    <input
                      type="checkbox"
                      name={stylesCell.name}
                      value={stylesCell.value}
                      id={stylesCell.name}
                    />
                    <label htmlFor={stylesCell.name}>{stylesCell.value}</label>
                  </div>
                );
              })}
            </div>
            <span className="questionnaire-page__note">
              *Пожелания и предпочтения рассчитаны для жилого помещения. В
              случае если помещение общественное, пожелания обсуждаются на
              консультации.
            </span>
          </form>
        </div>
        <div className="questionnaire-page__actions">
          <Button onClick={resetForm}>Очистить форму</Button>
          <Button form="questionnaire">Отправить анкету</Button>
        </div>
      </div>
    </div>
  );
};
