import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CustomSlider } from "../../components/slider";
import { CardStage } from "../../components/card-stage";
import { CardService } from "../../components/card-service";
import { cardsStage } from "./data";
import { cardsService } from "./data";
import "./style.scss";
import slider1 from "../main/assets/images/IMG_3.jpg";
import { Button } from "../../components/button";

export const ServicesPage = () => {
  return (
    <div>
      <Header />
      <div className="service-page">
        <div className="service-page__slider">
          <CustomSlider>
            <img src={slider1} alt="slider" />
            <img src={slider1} alt="slider" />
          </CustomSlider>
        </div>
        <p className="service-page__sequence">
          Последовательность и объем работ
        </p>
        <div className="service-page__stages">
          {cardsStage.map(({ id, imgUrl, imgName, description }) => (
            <CardStage
              key={id}
              imgUrl={imgUrl}
              imgName={imgName}
              description={description}
            ></CardStage>
          ))}
        </div>
        <div className="service-page__cards-service">
          {cardsService.map(
            ({ id, exampleLink, imgUrls, imgName, description }) => {
              return (
                <CardService
                  key={id}
                  exampleLink={exampleLink}
                  imgUrls={imgUrls}
                  imgName={imgName}
                  description={description}
                ></CardService>
              );
            }
          )}
        </div>
        <div className="service-page__button-wrapper">
          <Button>Все проекты</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
