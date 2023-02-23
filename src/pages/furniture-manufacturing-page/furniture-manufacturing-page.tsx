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
import { Loader } from "../../components/loader";

export const ManufacturingPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const { furniturePageData } = useFurnitureManufacturing();

  if (!furniturePageData) return <Loader />;

  return (
    <div>
      <ManufacturingWrapper>
        <Block>
          <Title>
            Проектирование и изготовление корпусной мебели по индивидуальным
            размерам
          </Title>
          <SliderMaterialUi
            items={furniturePageData.slides}
            height={isDesktop ? 650 : 235}
          />
        </Block>
        <Block>
          <Title>Чертежи</Title>
          <DrawingsWrapper>
            {furniturePageData.drawings.map((drawing) => {
              return (
                <Drawing key={drawing.id}>
                  <ImageDrawing src={drawing.url} alt={drawing.name} />
                </Drawing>
              );
            })}
          </DrawingsWrapper>
        </Block>
      </ManufacturingWrapper>
    </div>
  );
};
