import long from "./assets/images/long.jpg";
import height from "./assets/images/height.png";
import image2622 from "./assets/images/IMG_2622.jpg";
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
        itemId: "sample-1",
        mediaUrl: long,
        metaData: {
          type: "image",
          height: 3024,
          width: 4032,
          title: "sample-title",
          description: "sample-description",
          focalPoint: [0, 0],
        },
      },
      {
        // Image item:
        itemId: "sample-2",
        mediaUrl: height,
        metaData: {
          type: "image",
          height: 200,
          width: 100,
          title: "sample-title",
          description: "sample-description",
          focalPoint: [0, 0],
        },
      },
      {
        // Image item:
        itemId: "sample-3",
        mediaUrl: image2622,
        metaData: {
          type: "image",
          height: 480,
          width: 640,
          title: "sample-title",
          description: "sample-description",
          focalPoint: [0, 0],
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
