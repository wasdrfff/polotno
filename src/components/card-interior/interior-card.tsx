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

type TProps = {
  title: string;
  area: string;
  imageUrl: string;
  link: string;
  squarePosition?: "leftTop" | "rightTop" | "leftBottom" | "rightBottom";
  screen: boolean;
};

export const InteriorCard = ({
  title,
  area,
  link,
  imageUrl,
  squarePosition,
  screen,
}: TProps) => {
  return (
    <LinkWrapper to={link}>
      <CardWrapper>
        <ImageWrapper>
          <Image src={imageUrl} alt="pict" />
          {screen && squarePosition && (
            <Square squarePosition={squarePosition} />
          )}
        </ImageWrapper>
        <Footer>
          <InfoBlock>
            <Text textColor="textColor" variant={screen ? "mWeb" : "sMob"}>
              {title}
            </Text>
            <Text textColor="mainColor" variant={screen ? "mWeb" : "sMob"}>
              {area}
            </Text>
          </InfoBlock>
          <Icon
            name="rightArrowSmall"
            size={screen ? 25 : 10}
            color="textColor"
          />
        </Footer>
      </CardWrapper>
    </LinkWrapper>
  );
};
