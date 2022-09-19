import long from "./assets/images/long.jpg";
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
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { TItem } from "../../components/slider-material-ui/slider-material-ui";
import { useEffect, useMemo, useState } from "react";

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

      <SliderContainer isDesktop={isDesktop}>
        <TitleWrapper>
          <Text>Каждый человек по своей природе творец.</Text>
          <Text>Давайте создавать вместе!</Text>
        </TitleWrapper>

        <SliderWrapper>
          <BlueSquare position="left" isHidden={!isDesktop} />
          <SliderMaterialUi items={items} height={isDesktop ? 650 : 235} />
        </SliderWrapper>
      </SliderContainer>
    </Wrapper>
  );
};
