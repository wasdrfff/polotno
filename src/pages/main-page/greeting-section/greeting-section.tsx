import {BlueSquare} from "../main-page-styled";
import {Background, Content, Description, ImageWrapper, Separator, Text, Wrapper} from './greeting-section-styled'
import rectangle_1 from "./Rectangle_1.png";
import {ScreenType, useScreenType} from "../../../utils/screen-mode";

export function GreetingSection(){
  const screenType = useScreenType()

  const isDesktop = screenType === ScreenType.Desktop

  return (
    <Wrapper isDesktop={isDesktop}>
      <Background isDesktop={isDesktop} />
       <Content isDesktop={isDesktop}>
        <Description isDesktop={isDesktop}>
          <Text isDesktop={isDesktop}>Создаем&nbsp;дизайн проекты&nbsp;интерьера</Text>
          <Separator/>
          <Text isDesktop={isDesktop}>Реализуем</Text>
          <Separator/>
          <Text isDesktop={isDesktop}>Декорируем&nbsp;интерьер текстилем</Text>
        </Description>
        <ImageWrapper isDesktop={isDesktop}>
          <BlueSquare position="left" isHidden={isDesktop}/>
          <BlueSquare position="right"/>
          <img src={rectangle_1} alt="work" width="100%"/>
        </ImageWrapper>
       </Content>
    </Wrapper>
  )
}