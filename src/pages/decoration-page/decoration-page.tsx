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

export const DecorationPage = () => {
  const { cardItems } = useDecoration();
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const [firstElement, ...otherElements] = cardItems;

  const history = useHistory();
  function navigateToInteriors() {
    history.push("/interiors");
  }

  if (!cardItems.length) return <span>loading</span>;

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
              imageUrl={firstElement.imageUrl}
              title={firstElement.title}
              isLarge
            />
          </CardWrapper>
          <Container>
            {otherElements.map(({ id, imageUrl, title }) => {
              return (
                <CardsColumn>
                  <DecorationCard key={id} imageUrl={imageUrl} title={title} />
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
