import { ServiceCard } from "../../components/service-card";
import { cardsStage } from "./data";
import { Button } from "../../components/button";
import {
  BlueSquare,
  ButtonWrapper,
  CardsStageWrapper,
  CardsWrapper,
  Container,
  SeparatorWrapper,
  SliderWrapper,
  TitleWrapper,
  WorkStep,
  WorkStepTitle,
  Wrapper,
} from "./interior-decoration-page-styled";
import { Icon } from "../../components/icon";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { useInterior } from "./use-interior";
import { useHistory } from "react-router-dom";
import { Text } from "../../components/text";
import React from "react";
import { Separator } from "../../components/separator";
import { Loader } from "../../components/loader";

export const InteriorDecorationPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const history = useHistory();

  function navigateToDecoration() {
    history.push("/decoration");
  }

  const positionRef = React.useRef(0);

  const onCardsScroll = (e: any) => {
    const x = e.currentTarget.scrollLeft;
    if (x !== positionRef.current) {
      positionRef.current = x;
    }
  };

  const { interiorsDecorationPage } = useInterior();

  if (!interiorsDecorationPage) return <Loader />;

  return (
    <Wrapper>
      <SeparatorWrapper>
        <Separator />
      </SeparatorWrapper>
      <SliderWrapper>
        <SliderMaterialUi
          items={interiorsDecorationPage.slides.map((slide) => ({
            id: slide.id,
            image: {
              url: slide.url,
              name: slide.name,
            },
          }))}
          height={isDesktop ? 585 : 235}
        />
        <BlueSquare position="right" isHidden={!isDesktop} />
      </SliderWrapper>
      <Container>
        <TitleWrapper>
          <Text variant={isDesktop ? "h1Web" : "h2Mob"} textColor="textColor">
            Последовательность и объем работ
          </Text>
        </TitleWrapper>
        <CardsStageWrapper>
          {cardsStage.map(({ id, iconName, description }) => (
            <WorkStep key={id}>
              <Icon name={iconName} size={isDesktop ? 60 : 30} />
              <WorkStepTitle>
                <Text
                  variant={isDesktop ? "mWeb" : "mMob"}
                  textColor="textColor"
                >
                  {description}
                </Text>
              </WorkStepTitle>
            </WorkStep>
          ))}
        </CardsStageWrapper>
      </Container>
      <CardsWrapper onScroll={onCardsScroll}>
        {interiorsDecorationPage.cards.map(({ id, slides, title }) => {
          return <ServiceCard key={id} slides={slides} title={title} />;
        })}
      </CardsWrapper>
      <ButtonWrapper>
        <Button onClick={navigateToDecoration}>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Все проекты
          </Text>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
