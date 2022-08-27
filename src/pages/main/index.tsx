import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import { CustomSlider } from "../../components/slider/index";
import image3 from "./assets/images/IMG_3.jpg";
import image26 from "./assets/images/IMG_26.jpg";
import image2622 from "./assets/images/IMG_2622.jpg";
import rectangle_1 from "./assets/images/Rectangle_1.png";
import square from "./assets/images/Square.svg";
import "./style.scss";

export const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__presentation-block">
        <div className="main-page__blue-bg"></div>
        <div className="main-page__block presentation-block">
          <div className="presentation-block__description">
            <span>Создаем&nbsp;дизайн проекты&nbsp;интерьера</span>
            <div className="presentation-block__separator"></div>
            <span>Реализуем</span>
            <div className="presentation-block__separator"></div>
            <span>Декорируем&nbsp;интерьер текстилем</span>
          </div>
          <div className="presentation-block__image-wrapper">
            <img
              src={square}
              alt="top-square"
              className="main-page__bottom-square-image_left"
            />
            <img
              src={square}
              alt="bottom-square"
              className="main-page__bottom-square-image_right"
            />
            <img src={rectangle_1} alt="work" className="main-page__image" />
          </div>
        </div>
      </div>

      <div className="main-page__block slider-block">
        <div className="main-page__title">
          <span className="main-page__text">
            Каждый человек по своей природе творец.
          </span>
          <span className="main-page__text">Давайте создавать вместе!</span>
        </div>
        <div className="main-page__slider-wrapper">
          <img
            src={square}
            alt="bottom-square"
            className="main-page__slider-square-image main-page__slider-square-image_bottom"
          />
          <CustomSlider>
            <img src={image3} alt="slider" />
            <img src={image26} alt="slider" />
            <img src={image2622} alt="slider" />
          </CustomSlider>
        </div>
      </div>
      <Footer />
    </div>
  );
};
