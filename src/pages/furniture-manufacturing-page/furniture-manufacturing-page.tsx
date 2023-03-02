import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { useFurnitureManufacturing } from "./use-furniture-manufacturing";
import {
  Block,
  BlueSquare,
  DrawingsBlock,
  DrawingsWrapper,
  ManufacturingWrapper,
  SeparatorWrapper,
  SliderWrapper,
  TextWrapper,
  TitleWrapper,
} from "./furniture-manufacturing-styled";
import { Loader } from "../../components/loader";
import { DrawingCard } from "../../components/drawing-card";
import { Text } from "../../components/text";
import { Separator } from "../../components/separator";

export const ManufacturingPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const { furniturePageData } = useFurnitureManufacturing();

  if (!furniturePageData) return <Loader />;
  return (
    <div>
      <ManufacturingWrapper>
        <SeparatorWrapper>
          <Separator />
        </SeparatorWrapper>
        <Block>
          <TitleWrapper>
            <Text variant={isDesktop ? "h2Web" : "mMob"} textColor="textColor">
              Проектирование и изготовление корпусной мебели по индивидуальным
              размерам
            </Text>
          </TitleWrapper>
          <SliderWrapper>
            <SliderMaterialUi
              items={furniturePageData.slides}
              height={isDesktop ? 585 : 235}
            />
            <BlueSquare position="right" isHidden={!isDesktop} />
          </SliderWrapper>
        </Block>
        <DrawingsBlock>
          <TextWrapper>
            <Text variant={isDesktop ? "h2Web" : "mMob"} textColor="textColor">
              Чертежи
            </Text>
          </TextWrapper>
          <DrawingsWrapper>
            {furniturePageData.drawingCards.map((drawingCard) => (
              <DrawingCard
                key={drawingCard.id}
                imageUrl={drawingCard.drawing.url}
                name={drawingCard.drawing.name}
                details={drawingCard.details}
              />
            ))}
          </DrawingsWrapper>
        </DrawingsBlock>
      </ManufacturingWrapper>
    </div>
  );
};
