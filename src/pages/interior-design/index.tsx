import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import "./style.scss";

export const InteriorDesign = () => {
  return (
    <div>
      <Header />
      <div className="interior-design">
        <p>
          РАЗРАБОТКА ДИЗАЙН-ПРОЕКТОВ ИНТЕРЬЕРА ЖИЛЫХ И ОБЩЕСТВЕННЫХ ПОМЕЩЕНИЙ
        </p>
        <img alt="картинка" />
        <p>УСЛУГИ ПО ПРОЕКТИРОВАНИЮ ПРОЕКТА</p>
        <div className="interior-design__project">
          <div className="interior-design__description">
            <p id="name">Проект-мини</p>
            <p>срок от 5 рабочих дней</p>
          </div>
          <div className="interior-design__details">
            <ul>
              <li>6 детально проработанных чертежей</li>
              <li>индивидуальный проект под ваш быт</li>
              <li>учитываются нормы согласования перепланировки</li>
              <li>возможность удаленного проектирования</li>
            </ul>
          </div>
          <div className="interior-design__actions">
            <span>СМОТРЕТЬ ПРИМЕР</span>
            <span>ОТ 30000 РУБ.</span>
          </div>
          <div className="interior-design__image">
            <img alt="картинка" />
          </div>
        </div>
        <div className="interior-design__project">
          <div className="interior-design__description">
            <p id="name">Проект-средний</p>
            <p>срок от 15 рабочих дней</p>
          </div>
          <div className="interior-design__details">
            <ul>
              <li>все необходимые чертежи для стройки и закупок</li>
              <li>эскизы проекта</li>
              <li>наглядный подбор мебели и декора</li>
              <li>возможность удаленного проектирования</li>
            </ul>
          </div>
          <div className="interior-design__actions">
            <span>СМОТРЕТЬ ПРИМЕР</span>
            <span>ОТ 2500 РУБ.</span>
          </div>
          <div className="interior-design__image">
            <img alt="картинка" />
          </div>
        </div>
        <div className="interior-design__project">
          <div className="interior-design__description">
            <p id="name">полный дизайн-проект</p>
            <p>срок от 10 недель</p>
          </div>
          <div className="interior-design__details">
            <ul>
              <li>техническое задание с консультацией дизайнера</li>
              <li>планировочное решение с мебелью и оборудованием</li>
              <li>эскизы</li>
              <li>3D визуализация</li>
              <li>полный рабочий проект</li>
              <li>адаптация инженерных проектов</li>
              <li>ведомость по полной комплектации проекта</li>
            </ul>
          </div>
          <div className="interior-design__actions">
            <span>СМОТРЕТЬ ПРИМЕР</span>
            <span>ОТ 4000 РУБ.</span>
          </div>
          <div className="interior-design__image">
            <img alt="картинка" />
          </div>
        </div>
        <p>УСЛУГИ НА ЭТАПЕ СТРОИТЕЛЬСТВА</p>
        <div className="interior-design__project">
          <div className="interior-design__description">
            <p id="name">авторский надзор</p>
          </div>
          <div className="interior-design__details">
            <ul>
              <li>плановые выезды на объект</li>
              <li>надзор за соответсвием реализации проекту</li>
              <li>
                необходимые дополнения в проект в связи с открывшимися
                обстоятельствами
              </li>
              <li>
                контроль соответствия проектного колористического решения{" "}
              </li>
              <li>консультация по общим вопросам дизайн-проекта</li>
            </ul>
          </div>
          <div className="interior-design__actions">
            <span>35000 РУБ В МЕСЯЦ ДО 150М2</span>
          </div>
          <div className="interior-design__image">
            <img alt="картинка" />
          </div>
        </div>
        <div className="interior-design__project">
          <div className="interior-design__description">
            <p id="name">комплектация</p>
          </div>
          <div className="interior-design__details">
            <ul>
              <li>расчет количества материалов необходимых к закупке</li>
              <li>формирование плана-графика производства закупок</li>
              <li>
                поиск наиболее подходящих поставщиков на отдельные позиции
                товара
              </li>
              <li>поиск производителей индивидуальных конструкций</li>
              <li>консультирование поставщиков и производителей</li>
              <li>сопровождение заказчика при производстве закупок</li>
            </ul>
          </div>
          <div className="interior-design__actions">
            <span>500 РУБ,М2 ЗАВИСИТ ОТ МЕТРАЖА И ОБЪЕМА</span>
          </div>
          <div className="interior-design__image">
            <img alt="картинка" />
          </div>
        </div>
        <div className="interior-design__links">
          <Link to="/questionnaire">Заполнить анкету</Link>
          <Link to="/contact">Заказать обратный звонок</Link>
          <Link to="/portfolio">Пример дизайн проекта</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
