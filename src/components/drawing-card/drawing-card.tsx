import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { Text } from "../text";
import {
  DescriptionWrapper,
  Detail,
  DrawingImageWrapper,
  DrawingWrapper,
  Picture,
} from "./drawing-card-styled";

type TProps = {
  imageUrl: string;
  name: string;
  details: TDetail[];
};

type TDetail = {
  id: number;
  detail: string;
};

export const DrawingCard = ({ imageUrl, name, details }: TProps) => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <DrawingWrapper>
      <DrawingImageWrapper>
        <Picture src={imageUrl} alt={name} />
      </DrawingImageWrapper>
      <DescriptionWrapper>
        {details.map((detail) => {
          return (
            <Detail key={detail.id}>
              <Text variant={isDesktop ? "mWeb" : "sMob"} textColor="textColor">
                {detail.detail}
              </Text>
            </Detail>
          );
        })}
      </DescriptionWrapper>
    </DrawingWrapper>
  );
};
