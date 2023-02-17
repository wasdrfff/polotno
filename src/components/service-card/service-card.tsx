import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUiNew } from "../slider-material-ui-new";
import { Text } from "../text";
import { TextWrapper, SliderWrapper, Wrapper } from "./service-card-styled";
import { TSlide } from "./types";

type TProps = {
  slides: TSlide[];
  title: string;
};

export const ServiceCard = ({ slides, title }: TProps) => {
  const screenType = useScreenType();
  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <Wrapper>
      <TextWrapper>
        <Text variant={isDesktop ? "h3Web" : "h3Mob"} textColor="textColor">
          {title}
        </Text>
      </TextWrapper>
      <SliderWrapper>
        <SliderMaterialUiNew items={slides} height={isDesktop ? 440 : 155} />
      </SliderWrapper>
    </Wrapper>
  );
};
