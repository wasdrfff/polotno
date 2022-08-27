import {Footer} from "../../components/footer";
import {Header} from "../../components/header";
import image3 from "./assets/images/IMG_3.jpg";
import image26 from "./assets/images/IMG_26.jpg";
import image2622 from "./assets/images/IMG_2622.jpg";
import { GreetingSection} from './greeting-section';
import "./style.scss";
import {SliderNew} from "../../components/slider-new";
import {
  BlueSquare,
  Container,
  GreetingSectionWrapper,
  SliderWrapper,
  Text,
  TitleWrapper,
  Wrapper
} from "./main-page-styled";
import {ScreenType, useScreenType} from "../../utils/screen-mode";

export const MainPage = () => {

  const screenType = useScreenType()

  const isDesktop = screenType === ScreenType.Desktop

  const sliderNewItems = [
    { // Image item:
      itemId: 'sample-1',
      mediaUrl: image3,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],
      }
    },
    { // Image item:
      itemId: 'sample-2',
      mediaUrl: image26,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],

      }
    },
    { // Image item:
      itemId: 'sample-3',
      mediaUrl: image2622,
      metaData: {
        type: 'image',
        height: 200,
        width: 100,
        title: 'sample-title',
        description: 'sample-description',
        focalPoint: [0, 0],

      }
    },

  ]

  return (
    <Wrapper>
      <Header/>
      <GreetingSectionWrapper>
        <GreetingSection />
      </GreetingSectionWrapper>

      <Container isDesktop={isDesktop}>
        <TitleWrapper>
          <Text>Каждый человек по своей природе творец.</Text>
          <Text>Давайте создавать вместе!</Text>
        </TitleWrapper>

        <SliderWrapper>
          <BlueSquare position="left" isHidden={!isDesktop} />
          <SliderNew items={sliderNewItems}/>
        </SliderWrapper>
      </Container>
      <Footer/>
    </Wrapper>
  );
};
