import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUiNew } from "../slider-material-ui-new";
import { Text } from "../text";
import { ExampleLink, SliderWrapper, Wrapper } from "./card-service-styled";
import { TSlide } from "./types";

type TProps = {
  slides: TSlide[];
  description: string;
  exampleLink: string;
};

export const CardService = ({ exampleLink, slides, description }: TProps) => {
  const screenType = useScreenType();
  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <Wrapper>
      <ExampleLink to={"/services/interior-decoration" + exampleLink}>
        <Text variant={isDesktop ? "h3Web" : "h3Mob"} textColor="textColor">
          {description}
        </Text>
      </ExampleLink>
      <SliderWrapper>
        <SliderMaterialUiNew items={slides} height={isDesktop ? 440 : 155} />
      </SliderWrapper>
    </Wrapper>
  );
};
