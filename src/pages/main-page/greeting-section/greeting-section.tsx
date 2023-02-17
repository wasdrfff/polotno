import {
  Background,
  Content,
  Description,
  ImageWrapper,
  Wrapper,
  BlueSquare,
  SeparatorWrapper,
} from "./greeting-section-styled";
import { ScreenType, useScreenType } from "../../../utils/screen-mode";
import { Text } from "../../../components/text";
import { Separator } from "../../../components/separator";

type TProps = {
  imageName: string;
  imageUrl: string;
};

export function GreetingSection({ imageUrl, imageName }: TProps) {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <Wrapper isDesktop={isDesktop}>
      <Background isDesktop={isDesktop} />
      <Content isDesktop={isDesktop}>
        <Description isDesktop={isDesktop}>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Создаем&nbsp;дизайн проекты&nbsp;интерьера
          </Text>
          <SeparatorWrapper>
            <Separator />
          </SeparatorWrapper>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Реализуем
          </Text>
          <SeparatorWrapper>
            <Separator />
          </SeparatorWrapper>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Декорируем&nbsp;интерьер текстилем
          </Text>
        </Description>
        <ImageWrapper isDesktop={isDesktop}>
          <BlueSquare position="left" isHidden={isDesktop} />
          <BlueSquare position="right" />
          <img src={imageUrl} alt={imageName} width="100%" height="100%" />
        </ImageWrapper>
      </Content>
    </Wrapper>
  );
}
