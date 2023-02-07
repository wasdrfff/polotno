import { Card, CardWrapper, CustomLink, Image } from "./decor-card-styled";
import { Text } from "../text";

type TProps = {
  img: string;
  description: string;
};

export const DecorCard = ({ img, description }: TProps) => {
  return (
    <CardWrapper>
      <CustomLink to="/">
        <Card>
          <Image src={img} alt="material" />
          <Text variant="h2Mob" textColor="textColor">
            {description}
          </Text>
        </Card>
      </CustomLink>
    </CardWrapper>
  );
};
