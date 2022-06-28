import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CustomSlider } from "../../components/slider";
import { CardStage } from "../../components/card-stage";
import { CardService } from "../../components/card-service";
import { cardsStage } from "./data";
import { cardsService } from "./data";
import { Link } from "react-router-dom";
import "./style.scss";
import slider1 from "../main/assets/images/IMG_3.jpg";

export const ServicesPage = () => {
  return (
    <div>
      <Header />
      <div className="service-page">
        <p className="service-page__title">
          декорирование интерьера текстилем.
        </p>
        <CustomSlider>
          <img src={slider1} alt="slider" />
          <img src={slider1} alt="slider" />
          <img src={slider1} alt="slider" />
        </CustomSlider>
        <p className="service-page__sequence">
          последовательность и объем работ
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
            ({ id, exampleLink, imgUrl, imgName, description }) => (
              <CardService
                key={id}
                exampleLink={exampleLink}
                imgUrl={imgUrl}
                imgName={imgName}
                description={description}
              ></CardService>
            )
          )}
        </div>
        <div className="service-page__action">
          <Link to="/" className="service-page__action-text">
            все проекты
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
