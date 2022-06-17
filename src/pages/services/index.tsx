import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CustomSlider } from "../../components/slider/";
import "./style.scss";
import sketch from "./assets/images/sketch.svg";
import consultation from "./assets/images/consultation.svg";
import metering from "./assets/images/metering.svg";
import selection from "./assets/images/selection.svg";
import escort from "./assets/images/escort.svg";
import sewing from "./assets/images/sewing.svg";
import complete from "./assets/images/complete.svg";
import slider1 from "../main/assets/images/IMG_3.jpg";
import { Link } from "react-router-dom";
export const ServicesDecoration = () => {
  return (
    <div>
      <Header />
      <div className="service-page">
        <p>ДЕКОРИРОВАНИЕ ИНТЕРЬЕРА ТЕКСТИЛЕМ.</p>
        <CustomSlider>
          <img src={slider1} alt="work" />
          <img src={slider1} alt="work" />
          <img src={slider1} alt="work" />
          <img src={slider1} alt="work" />
        </CustomSlider>
        <p>ПОСЛЕДОВАТЕЛЬНОСТЬ И ОБЪЕМ РАБОТ</p>
        <div className="service-page__sequence">
          <div className="service-page__stage">
            <img src={consultation} alt="consultation" />
            <span>Консультация</span>
          </div>
          <div className="service-page__stage">
            <img src={metering} alt="metering" />
            <span>Выезд на замеры</span>
          </div>
          <div className="service-page__stage">
            <img src={sketch} alt="sketch" />
            <span>Разработка эксизов</span>
          </div>
          <div className="service-page__stage">
            <img src={selection} alt="selection" />
            <span>Подбор материалов</span>
          </div>
          <div className="service-page__stage">
            <img src={escort} alt="escort" />
            <span>Сопровождение заказа</span>
          </div>
          <div className="service-page__stage">
            <img src={sewing} alt="sewing" />
            <span>Пошив</span>
          </div>
          <div className="service-page__stage">
            <img src={complete} alt="complete" />
            <span>Установка и монтаж</span>
          </div>
        </div>
        <div className="service-page__block">
          <img src={slider1} alt="work" />
          <Link to="/decor">
            <p>ткани,декор</p>
          </Link>
        </div>
        <div className="service-page__block">
          <img src={slider1} alt="work" />
          <Link to="/decor">
            <p>ткани,декор</p>
          </Link>
        </div>
        <div className="service-page__block">
          <img src={slider1} alt="work" />
          <p>карнизы</p>
        </div>
        <div className="service-page__block">
          <img src={slider1} alt="work" />
          <p>солнцезащитные системы</p>
        </div>
        <Link to="/" className="service-page__action">
          все проекты
        </Link>
      </div>
      <Footer />
    </div>
  );
};
