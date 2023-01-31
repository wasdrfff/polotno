import long from "./assets/images/long.jpg";
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
import { TItem } from "../../components/slider-material-ui";
import { useEffect, useMemo, useState } from "react";
import { Text } from "../../components/text";
import { Separator } from "../../components/separator";

export const MainPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const [items, setItems] = useState<TItem[]>([]);
  const sliderNewItems = useMemo(
    () => [
      {
        // Image item:
        id: 1,
        image: {
          url: long,
          description: "sample-description",
          name: "string",
        },
      },
      {
        // Image item:
        id: 2,
        image: {
          url: long,
          description: "sample-description",
          name: "string",
        },
      },
    ],
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setItems(sliderNewItems);
    }, 2000);
  }, [setItems, sliderNewItems]);

  return (
    <Wrapper>
      <GreetingSectionWrapper>
        <GreetingSection />
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
          <SliderMaterialUi items={items} height={isDesktop ? 650 : 235} />
        </SliderWrapper>
      </SliderContainer>
    </Wrapper>
  );
};
