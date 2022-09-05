import { CustomSlider } from "../../components/slider";
import { CardService } from "../../components/card-service";
import { cardsStage } from "./data";
import { cardsService } from "./data";
import "./style.scss";
import slider1 from "../main-page/assets/images/IMG_3.jpg";
import { Button } from "../../components/button";
import { WorkStep, WorkStepTitle } from "./interior-decoration-page-styled";
import { Icon } from "../../components/icon";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

export const InteriorDecorationPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <div>
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
          {cardsStage.map(({ id, iconName, description }) => (
            <WorkStep key={id}>
              <Icon name={iconName} size={isDesktop ? 120 : 50} />
              <WorkStepTitle>{description}</WorkStepTitle>
            </WorkStep>
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
    </div>
  );
};
