import { GreetingSection } from "./greeting-section";

import {
  BlueSquare,
  SliderContainer,
  GreetingSectionWrapper,
  SliderWrapper,
  Wrapper,
  Chapter,
  ContentChapter,
  TitleWrapper,
  Title,
  SeparatorWrapper,
} from "./main-page-styled";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { Text } from "../../components/text";
import { Separator } from "../../components/separator";
import { useMainPage } from "./use-main-page";
import { Loader } from "../../components/loader";

export const MainPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const { mainPageData } = useMainPage();

  if (!mainPageData) return <Loader />;

  return (
    <Wrapper>
      <GreetingSectionWrapper>
        <GreetingSection
          imageUrl={mainPageData.image.url}
          imageName={mainPageData.image.name}
        />
      </GreetingSectionWrapper>
      <Chapter>
        <ContentChapter>
          <SeparatorWrapper>
            <Separator />
          </SeparatorWrapper>
          <TitleWrapper>
            <Title>
              <Text
                textColor="textColor"
                variant={isDesktop ? "h3Web" : "mMob"}
              >
                Каждый человек по своей природе творец.
              </Text>
              <Text
                textColor="textColor"
                variant={isDesktop ? "h3Web" : "mMob"}
              >
                Давайте создавать вместе!
              </Text>
            </Title>
          </TitleWrapper>
        </ContentChapter>
      </Chapter>

      <SliderContainer isDesktop={isDesktop}>
        {!isDesktop && (
          <Title>
            <Text textColor="textColor" variant={isDesktop ? "h3Web" : "mMob"}>
              Каждый человек по своей природе творец.
            </Text>
            <Text textColor="textColor" variant={isDesktop ? "h3Web" : "mMob"}>
              Давайте создавать вместе!
            </Text>
          </Title>
        )}
        <SliderWrapper>
          <BlueSquare position="left" isHidden={!isDesktop} />
          <SliderMaterialUi
            items={mainPageData.slides}
            height={isDesktop ? 650 : 235}
          />
        </SliderWrapper>
      </SliderContainer>
    </Wrapper>
  );
};
