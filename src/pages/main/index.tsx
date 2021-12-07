import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import "./style.scss";
import { CustomSlider } from "../../components/slider/index";
import image3 from "./assets/images/IMG_3.jpg";
import image26 from "./assets/images/IMG_26.jpg";
import image2617 from "./assets/images/IMG_2617.jpg";
import image2622 from "./assets/images/IMG_2622.jpg";
// import Images from "./assets/index";

export const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <main className="main-page__blocks">
        <div className="main-page__block">
          <div className="main-page__descriptions">
            <span>СОЗДАЕМ ДИЗАЙН-ПРОЕКТЫ ИНТЕРЬЕРА. РЕАЛИЗУЕМ</span>
            <span>ДЕКОРИРУЕМ ИНТЕРЬЕР ТЕКСТИЛЕМ.</span>
          </div>
          <CustomSlider>
            <img src={image3} alt="slider" />
            <img src={image26} alt="slider" />
            <img src={image2617} alt="slider" />
            <img src={image2622} alt="slider" />
          </CustomSlider>
        </div>
        <div className="main-page__block">
          <span>
            КАЖДЫЙ ЧЕЛОВЕК ПО СВОЕЙ ПРИРОДЕ ТВОРЕЦ.ДАВАЙТЕ СОЗДАВАТЬ ВМЕСТЕ!
          </span>
        </div>
        <CustomSlider>
          <img src={image3} alt="slider" />
          <img src={image26} alt="slider" />
          <img src={image2617} alt="slider" />
          <img src={image2622} alt="slider" />
        </CustomSlider>
      </main>
      <Footer />
    </div>
  );
};
