import { CardService } from "../../components/card-service";
import { cardsStage } from "./data";
import "./style.scss";
import { Button } from "../../components/button";
import {
  Container,
  TitleBlock,
  WorkStep,
  WorkStepTitle,
} from "./interior-decoration-page-styled";
import { Icon } from "../../components/icon";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { useInterior } from "./use-interior";

export const InteriorDecorationPage = () => {
  const screenType = useScreenType();
  const { interiorItems, cardsService } = useInterior();
  const isDesktop = screenType === ScreenType.Desktop;
  return (
    <div>
      <div className="service-page">
        <div className="service-page__slider">
          <SliderMaterialUi
            items={interiorItems}
            height={isDesktop ? 650 : 235}
          />
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
          {cardsService.map(({ card, id }) => {
            return (
              <CardService
                key={id}
                exampleLink={card.exampleLink}
                imgUrls={[card.urlImage, card.urlImageExample]}
                description={card.description}
              />
            );
          })}
        </div>
        <div className="service-page__button-wrapper">
          <Button>Все проекты</Button>
        </div>
      </div>
    </div>
  );
};
