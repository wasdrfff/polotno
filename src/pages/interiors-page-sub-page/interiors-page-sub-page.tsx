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
  Loading,
} from "./interiors-page-sub-page-styled";
import { useSubPage } from "./use-sub-page";
import { useHistory } from "react-router-dom";
import { Icon } from "../../components/icon";
import { Separator } from "../../components/separator";

export const InteriorsSubPage = () => {
  const { subPageApiResult } = useSubPage();
  const history = useHistory();

  if (!subPageApiResult) return <Loading />;

  const items = subPageApiResult.page.image.map((el) => ({
    id: el.id,
    image: {
      url: el.url,
      name: el.name,
      description: el.description,
    },
  }));

  return (
    <Wrapper>
      <SeparatorWrapper>
        <Separator />
      </SeparatorWrapper>
      <TitleWrapper>
        <BackWrapper onClick={() => history.goBack()}>
          <Icon name="leftArrow" size={20} color="textColor" />
          <Text variant="mWeb" textColor="textColor">
            назад
          </Text>
        </BackWrapper>
        <Text variant="h2Web" textColor="textColor">
          {subPageApiResult.page.title}
        </Text>
      </TitleWrapper>
      <SliderWrapper>
        <SliderMaterialUi items={items} height={585} />
      </SliderWrapper>
      <Block>
        <Text variant="h3Web" textColor="textColor">
          Планировочное решение
        </Text>
        <Content>
          <Image src={subPageApiResult.page.planImageUrl} />
          <Image src={subPageApiResult.page.planImageUrl} />
        </Content>
      </Block>
      <Block>
        <Text variant="h3Web" textColor="textColor">
          План до начала работ
        </Text>
        <Content>
          <Image src={subPageApiResult.page.blueprintImageUrl} />
          <Image src={subPageApiResult.page.blueprintImageUrl} />
        </Content>
      </Block>
    </Wrapper>
  );
};
