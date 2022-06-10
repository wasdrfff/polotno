import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import "./style.scss";
import { CustomSlider } from "../../components/slider/index";
import image3 from "./assets/images/IMG_3.jpg";
import image26 from "./assets/images/IMG_26.jpg";

import image2622 from "./assets/images/IMG_2622.jpg";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="main-page">
        <main className="main-page__blocks">
          <div className="main-page__block">
            <div className="main-page__descriptions">
              <span>создаем дизайн-проекты интерьера.</span>
              <span id="span_none">реализуем.</span>
              <span id="span_none">декорируем интерьер текстилем.</span>
            </div>
            <CustomSlider>
              <img src={image3} alt="slider" />
              <img src={image26} alt="slider" />
              <img src={image2622} alt="slider" />
            </CustomSlider>
          </div>
          <div className="main-page__block">
            <span id="span_none">
              каждый человек по своей природе творец.давайте создавать вместе!
            </span>
            <span id="mobile_text">декорируем интерьер текстилем.</span>
            <CustomSlider>
              <img src={image3} alt="slider" />
              <img src={image26} alt="slider" />
              <img src={image2622} alt="slider" />
            </CustomSlider>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
