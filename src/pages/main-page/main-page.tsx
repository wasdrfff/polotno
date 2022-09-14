import { GreetingSection } from "./greeting-section";
import {
  BlueSquare,
  SliderContainer,
  GreetingSectionWrapper,
  SliderWrapper,
  Text,
  TitleWrapper,
  Wrapper,
} from "./main-page-styled";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

export const MainPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <Wrapper>
      <GreetingSectionWrapper>
        <GreetingSection />
      </GreetingSectionWrapper>

      <SliderContainer isDesktop={isDesktop}>
        <TitleWrapper>
          <Text>Каждый человек по своей природе творец.</Text>
          <Text>Давайте создавать вместе!</Text>
        </TitleWrapper>

        <SliderWrapper>
          <BlueSquare position="left" isHidden={!isDesktop} />
        </SliderWrapper>
      </SliderContainer>
    </Wrapper>
  );
};
