import {Button} from "../../components/button";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";
import {CustomSlider} from "../../components/slider";
import work from "../main-page/assets/images/IMG_3.jpg";
import "./style.scss";
import {PageWrapper, SliderWrapper, Wrapper} from "./decoration-page-styled";
import {SliderNew} from "../../components/slider-new";
import {useDecoration} from "./use-decoration";

export const DecorationPage = () => {
  const {kitchenSlider} = useDecoration()

  console.log('kitchenSlider', kitchenSlider)

  return (
    <PageWrapper>
      <Header/>
      <Wrapper>
        <span className="portfolioPage__title-page">
          Декорирование интерьера текстилем
        </span>

        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">Гостиные</span>
          <CustomSlider>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
          </CustomSlider>

        </div>
        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">
            Кухни, столовые
          </span>
          <CustomSlider>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
          </CustomSlider>
          <SliderWrapper>
            <SliderNew items={kitchenSlider.items}/>
          </SliderWrapper>
        </div>
        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">
            Спальни, кабинеты
          </span>
          <CustomSlider>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
          </CustomSlider>
        </div>
        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">Детские</span>
          <CustomSlider>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
          </CustomSlider>
        </div>
        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">
            Другие помещения
          </span>
          <CustomSlider>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
            <img src={work} alt="work"/>
          </CustomSlider>
        </div>

        <Button>Дизайн интерьера</Button>

      </Wrapper>
      <Footer/>
    </PageWrapper>
  );
};
