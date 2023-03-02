import { Button } from "../../components/button";

import { useDecoration } from "./use-decoration";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { useHistory } from "react-router-dom";

import { DecorationCard } from "../../components/decoration-card";
import {
  CardWrapper,
  Container,
  Wrapper,
  CardsColumn,
  SeparatorWrapper,
  Content,
  ButtonWrapper,
  TextWrapper,
} from "./decoration-page-styled";
import { Separator } from "../../components/separator";
import { Text } from "../../components/text";
import { Loader } from "../../components/loader";

export const DecorationPage = () => {
  const { decorationData } = useDecoration();

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const history = useHistory();
  function navigateToInteriors() {
    history.push("/interiors");
  }

  if (!decorationData) return <Loader />;

  const [firstElement, ...otherElements] = decorationData.cards;

  return (
    <>
      <Wrapper>
        <SeparatorWrapper>
          <Separator />
        </SeparatorWrapper>
        <Content>
          <TextWrapper>
            <Text variant={isDesktop ? "h1Web" : "h2Mob"} textColor="textColor">
              Декорирование интерьера текстилем
            </Text>
          </TextWrapper>
          <CardWrapper>
            <DecorationCard
              imageUrl={firstElement.image.url}
              title={firstElement.title}
              items={firstElement.slides}
              name={firstElement.image.name}
              isLarge
            />
          </CardWrapper>
          <Container>
            {otherElements.map(({ image, title, slides }) => {
              return (
                <CardsColumn key={image.id}>
                  <DecorationCard
                    name={image.name}
                    imageUrl={image.url}
                    title={title}
                    items={slides}
                  />
                </CardsColumn>
              );
            })}
          </Container>
          <ButtonWrapper>
            <Button onClick={navigateToInteriors}>
              <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
                Дизайн интерьера
              </Text>
            </Button>
          </ButtonWrapper>
        </Content>
      </Wrapper>
    </>
  );
};
