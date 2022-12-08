import {
  Background,
  Content,
  Description,
  ImageWrapper,
  Separator,
  Wrapper,
  BlueSquare,
} from "./greeting-section-styled";
import rectangle_1 from "./Rectangle_1.png";
import { ScreenType, useScreenType } from "../../../utils/screen-mode";
import { Text } from "../../../components/text";

export function GreetingSection() {
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
          <Separator />
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Реализуем
          </Text>
          <Separator />
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Декорируем&nbsp;интерьер текстилем
          </Text>
        </Description>
        <ImageWrapper isDesktop={isDesktop}>
          <BlueSquare position="left" isHidden={isDesktop} />
          <BlueSquare position="right" />
          <img src={rectangle_1} alt="work" width="100%" height="100%" />
        </ImageWrapper>
      </Content>
    </Wrapper>
  );
}
