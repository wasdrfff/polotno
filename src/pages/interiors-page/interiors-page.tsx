import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { InteriorCard } from "../../components/interior-card";
import {
  Column,
  Container,
  SeparatorWrapper,
  Wrapper,
} from "./interiors-page-styled";
import { useInteriorsPage } from "./use-interiors-page";
import { Separator } from "../../components/separator";
import { TCardExtended } from "./types";

export const InteriorsPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  let columnCount: number = isDesktop ? 3 : 2;

  const { interiorsData } = useInteriorsPage();

  if (!interiorsData) return <span>Loading</span>;

  const columns = interiorsData.reduce<TCardExtended[][]>(
    (columns, interior, index) => {
      columns[index % columnCount].push({
        ...interior.card,
        index: index,
        interiorId: interior.id,
      });
      return columns;
    },
    Array(columnCount)
      .fill(0)
      .map((_) => [])
  );
  return (
    <>
      <Wrapper>
        <SeparatorWrapper>
          <Separator />
        </SeparatorWrapper>
        <Container>
          {columns.map((column, index) => (
            <Column key={index}>
              {column.map((card) => {
                let squarePosition:
                  | "leftTop"
                  | "rightTop"
                  | "leftBottom"
                  | "rightBottom"
                  | undefined;
                switch (card.index % 6) {
                  case 0:
                    squarePosition = "leftBottom";
                    break;
                  case 2:
                    squarePosition = "rightTop";
                    break;

                  case 3:
                    squarePosition = "rightBottom";
                    break;

                  case 5:
                    squarePosition = "leftTop";
                    break;
                }
                return (
                  <InteriorCard
                    key={card.id}
                    id={card.interiorId}
                    title={card.title}
                    area={card.area}
                    imageUrl={card.image.url}
                    squarePosition={squarePosition}
                  />
                );
              })}
            </Column>
          ))}
        </Container>
      </Wrapper>
    </>
  );
};
