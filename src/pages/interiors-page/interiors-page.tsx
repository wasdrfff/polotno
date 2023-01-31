import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { InteriorCard } from "../../components/card-interior";
import {
  Column,
  Container,
  SeparatorWrapper,
  Wrapper,
} from "./interiors-page-styled";
import { useInteriorsPage } from "./use-interiors-page";
import { Separator } from "../../components/separator";

type TProject = {
  id: number;
  title: string;
  area: string;
  imageUrl: string;
  link: string;
};

export const InteriorsPage = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  let columnCount: number = isDesktop ? 3 : 2;

  const { projects } = useInteriorsPage();

  const columns = projects.reduce<TProject[][]>(
    (columns, card, index) => {
      columns[index % columnCount].push(card);
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
              {column.map(({ id, title, area, link, imageUrl }) => {
                let squarePosition:
                  | "leftTop"
                  | "rightTop"
                  | "leftBottom"
                  | "rightBottom"
                  | undefined;
                switch (id % 6) {
                  case 1:
                    squarePosition = "leftBottom";
                    break;
                  case 3:
                    squarePosition = "rightTop";
                    break;

                  case 4:
                    squarePosition = "rightBottom";
                    break;

                  case 0:
                    squarePosition = "leftTop";
                    break;
                }
                return (
                  <InteriorCard
                    key={id}
                    id={id}
                    title={title}
                    area={area}
                    link={link}
                    imageUrl={imageUrl}
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
