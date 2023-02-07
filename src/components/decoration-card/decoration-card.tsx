import {
  ImageWrapper,
  Image,
  LabelWrapper,
  Gradient,
} from "./decoration-card-styled";
import { Text } from "../text";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

type TProps = {
  imageUrl: string;
  title: string;
  isLarge?: boolean;
};

export const DecorationCard = ({ imageUrl, title, isLarge }: TProps) => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const variant = isDesktop ? (isLarge ? "h2Web" : "h3Web") : "h2Mob";

  return (
    <>
      <ImageWrapper>
        <Image src={imageUrl} alt="картинка" />
        <Gradient />
        <LabelWrapper isLarge={isLarge}>
          <Text variant={variant} textColor="white">
            {title}
          </Text>
        </LabelWrapper>
      </ImageWrapper>
    </>
  );
};
