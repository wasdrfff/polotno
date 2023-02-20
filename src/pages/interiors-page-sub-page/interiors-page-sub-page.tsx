import { Text } from "../../components/text";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import {
  Block,
  Content,
  SliderWrapper,
  Wrapper,
  Image,
  BackWrapper,
  TitleWrapper,
  SeparatorWrapper,
  BlockWrapper,
  Line,
} from "./interiors-page-sub-page-styled";
import { useSubPage } from "./use-sub-page";
import { useHistory } from "react-router-dom";
import { Icon } from "../../components/icon";
import { Separator } from "../../components/separator";
import { BlueSquare } from "../../components/square";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { Loader } from "../../components/loader";

export const InteriorsSubPage = () => {
  const { subPageApiResult } = useSubPage();
  const history = useHistory();

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  if (!subPageApiResult) return <Loader />;
  const items = subPageApiResult.slides.map((slide) => ({
    id: slide.id,
    image: {
      url: slide.url,
      name: slide.name,
      description: slide.name,
    },
  }));

  return (
    <Wrapper>
      <SeparatorWrapper>
        <Separator />
      </SeparatorWrapper>
      <TitleWrapper>
        <BackWrapper onClick={() => history.goBack()}>
          <Icon name="leftArrow" size={isDesktop ? 20 : 15} color="textColor" />
          <Text variant="mWeb" textColor="textColor">
            назад
          </Text>
        </BackWrapper>
        <Text variant={isDesktop ? "h2Web" : "h3Mob"} textColor="textColor">
          {subPageApiResult.card.title + " " + subPageApiResult.card.area}
        </Text>
      </TitleWrapper>
      <SliderWrapper>
        <SliderMaterialUi items={items} height={isDesktop ? 585 : 235} />
        <BlueSquare position="right" isHidden={isDesktop ? true : false} />
      </SliderWrapper>
      <BlockWrapper>
        <Line />
        <Block>
          <Text variant={isDesktop ? "h3Web" : "h3Mob"} textColor="textColor">
            Планировочное решение
          </Text>
          <Content>
            {/* <Image src={subPageApiResult.page.planImageUrl} />
            <Image src={subPageApiResult.page.planImageUrl} /> */}
            {subPageApiResult.blueprints.map((blueprint) => (
              <Image
                key={blueprint.id}
                src={blueprint.url}
                alt={blueprint.name}
              />
            ))}
          </Content>
        </Block>
        <Line />
        <Block>
          <Text variant={isDesktop ? "h3Web" : "h3Mob"} textColor="textColor">
            План до начала работ
          </Text>
          <Content>
            {/* <Image src={subPageApiResult.page.blueprintImageUrl} />
            <Image src={subPageApiResult.page.blueprintImageUrl} /> */}
            {subPageApiResult.plans.map((plan) => (
              <Image key={plan.id} src={plan.url} alt={plan.name} />
            ))}
          </Content>
        </Block>
        <Line />
      </BlockWrapper>
    </Wrapper>
  );
};
