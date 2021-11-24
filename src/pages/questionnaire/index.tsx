import { Footers } from "../../components/footers/footers"
import { Header } from "../../components/header/header"
import './style.css'
export const QuestionnairePage = () => {
    return (
        <div>
            <Header />
            <div className='questionnaire-page__content'>
                <main className='questionnaire-page__main'>
                    <h1>АНКЕТА С ПОЖЕЛАНИЯМИ</h1>
                    <span>
                        -вы можете заполнить или отправить анкету до консультации
                    </span>
                    <span>
                        -мы будем более информированы
                    </span>
                    <span>
                        -вы можете менять свои пожелания после отправки анкеты
                    </span>
                    <h3>Электронная почта:</h3>
                    <input placeholder='Ваш адрес электронный почты' />
                    <p>Состав семьи</p>
                    <span>
                        Коротко опишите состав семьи,
                        которая будет проживать в квартире/доме,
                        включая домашних животных
                    </span>
                    <input placeholder='Мой ответ'></input>
                    <p>
                        В планировке предусмотреть комнаты:
                    </p>
                </main>
            </div>
            <Footers />
        </div>
    )
}