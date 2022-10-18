import {
  CollectionCardContent,
  Description,
  Image,
  WrapperImage,
  Text,
} from "./collection-card-styled";

type TProps = {
  imgUrl: string;
  characteristic: string;
  collectionName: string;
};

export const CollectionCard = ({
  imgUrl,
  characteristic,
  collectionName,
}: TProps) => {
  return (
    <CollectionCardContent>
      <WrapperImage>
        <Image src={imgUrl} alt="collection" />
      </WrapperImage>
      <Description>
        <Text>{collectionName}</Text>
        <Text>{characteristic}</Text>
      </Description>
    </CollectionCardContent>
  );
};
