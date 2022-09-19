import { CardService } from "../../components/card-service";
import { cardsStage } from "./data";
import { cardsService } from "./data";
import "./style.scss";
import slider1 from "../main-page/assets/images/IMG_3.jpg";
import { Button } from "../../components/button";
import {
  Container,
  TitleBlock,
  WorkStep,
  WorkStepTitle,
} from "./interior-decoration-page-styled";
import { Icon } from "../../components/icon";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import {useMemo} from "react";
import {SliderMaterialUi} from "../../components/slider-material-ui";

export const InteriorDecorationPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const items = useMemo(
    () => [
      {
        // Image item:
        id: 1,
        image: {
          url: slider1,
          description: "sample-description",
          name: "string",
        },
      },
      {
        // Image item:
        id: 2,
        image: {
          url: slider1,
          description: "sample-description",
          name: "string",
        },
      },
    ],
    []
  );

  return (
    <div>
      <div className="service-page">
        <div className="service-page__slider">
          <SliderMaterialUi items={items} height={isDesktop ? 650 : 235} />

        </div>
        <TitleBlock>Последовательность и объем работ</TitleBlock>
        <Container>
          {cardsStage.map(({ id, iconName, description }) => (
            <WorkStep key={id}>
              <Icon name={iconName} size={isDesktop ? 120 : 50} />
              <WorkStepTitle>{description}</WorkStepTitle>
            </WorkStep>
          ))}
        </Container>
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
