import {
  CardWrapper,
  Footer,
  Image,
  ImageWrapper,
  InfoBlock,
  LinkWrapper,
  Square,
} from "./interior-card-styled";
import { Text } from "../text";
import { Icon } from "../icon";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

type TProps = {
  id: number;
  title: string;
  area: string;
  imageUrl: string;
  link: string;
  squarePosition?: "leftTop" | "rightTop" | "leftBottom" | "rightBottom";
};

export const InteriorCard = ({
  id,
  title,
  area,
  link,
  imageUrl,
  squarePosition,
}: TProps) => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;
  return (
    <LinkWrapper to={"/interiors/" + id}>
      <CardWrapper>
        <ImageWrapper>
          <Image src={imageUrl} alt="pict" />
          {isDesktop && squarePosition && (
            <Square squarePosition={squarePosition} />
          )}
        </ImageWrapper>
        <Footer>
          <InfoBlock>
            <Text textColor="textColor" variant={isDesktop ? "mWeb" : "sMob"}>
              {title}
            </Text>
            <Text textColor="mainColor" variant={isDesktop ? "mWeb" : "sMob"}>
              {area}
            </Text>
          </InfoBlock>
          <Icon
            name="rightArrowSmall"
            size={isDesktop ? 25 : 10}
            color="textColor"
          />
        </Footer>
      </CardWrapper>
    </LinkWrapper>
  );
};
