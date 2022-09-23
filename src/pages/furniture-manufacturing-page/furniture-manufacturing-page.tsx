import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { useFurnitureManufacturing } from "./use-furniture-manufacturing";
import {
  Block,
  Drawing,
  DrawingsWrapper,
  ImageDrawing,
  ManufacturingWrapper,
  Title,
} from "./furniture-manufacturing-styled";

export const ManufacturingPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const { furnitureManufacturingItems, drawingItems } =
    useFurnitureManufacturing();
  return (
    <div>
      <ManufacturingWrapper>
        <Block>
          <Title>
            Проектирование и изготовление корпусной мебели по индивидуальным
            размерам
          </Title>
          <SliderMaterialUi
            items={furnitureManufacturingItems}
            height={isDesktop ? 650 : 235}
          />
        </Block>
        <Block>
          <Title>Чертежи</Title>
          <DrawingsWrapper>
            {drawingItems.map((drawingItem) => {
              return (
                <Drawing key={drawingItem.id}>
                  <ImageDrawing src={drawingItem.image.url} alt="drawing" />
                </Drawing>
              );
            })}
          </DrawingsWrapper>
        </Block>
      </ManufacturingWrapper>
    </div>
  );
};
