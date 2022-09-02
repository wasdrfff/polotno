import { BreadCrumbs } from "../../components/bread-crumbs";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CustomSlider } from "../../components/slider";
import work from "../main-page/assets/images/IMG_3.jpg";
import "./style.scss";

export const DecorationPage = () => {
  return (
    <>
      <Header />
      <BreadCrumbs/>
      <div className="portfolioPage">
        <main className="portfolioPage__main">
          <span className="portfolioPage__title-page">
            Декорирование интерьера текстилем
          </span>
          <div className="portfolioPage__content">
            <div className="portfolioPage__block">
              <span className="portfolioPage__description-block">Гостиные</span>
              <CustomSlider>
                <img src={work} alt="work" />
                <img src={work} alt="work" />
                <img src={work} alt="work" />
              </CustomSlider>
            </div>
            <div className="portfolioPage__block">
              <span className="portfolioPage__description-block">
                Кухни,столовые
              </span>
              <CustomSlider>
                <img src={work} alt="work" />
                <img src={work} alt="work" />
                <img src={work} alt="work" />
              </CustomSlider>
            </div>
            <div className="portfolioPage__block">
              <span className="portfolioPage__description-block">
                Спальни,кабинеты
              </span>
              <CustomSlider>
                <img src={work} alt="work" />
                <img src={work} alt="work" />
                <img src={work} alt="work" />
              </CustomSlider>
            </div>
            <div className="portfolioPage__block">
              <span className="portfolioPage__description-block">Детские</span>
              <CustomSlider>
                <img src={work} alt="work" />
                <img src={work} alt="work" />
                <img src={work} alt="work" />
              </CustomSlider>
            </div>
            <div className="portfolioPage__block">
              <span className="portfolioPage__description-block">
                Другие помещения
              </span>
              <CustomSlider>
                <img src={work} alt="work" />
                <img src={work} alt="work" />
                <img src={work} alt="work" />
              </CustomSlider>
            </div>
            <div className="portfolioPage__action">
              <Button>Дизайн интерьера</Button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
