import image3 from "./assets/images/IMG_3.jpg";
import image26 from "./assets/images/IMG_26.jpg";
import image2622 from "./assets/images/IMG_2622.jpg";
import { GreetingSection } from "./greeting-section";
import { SliderNew } from "../../components/slider-new";
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

  const sliderNewItems = [
    {
      // Image item:
      itemId: "sample-1",
      mediaUrl: image3,
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
      mediaUrl: image26,
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
  ];

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
          <SliderNew items={sliderNewItems} />
        </SliderWrapper>
      </SliderContainer>
    </Wrapper>
  );
};
