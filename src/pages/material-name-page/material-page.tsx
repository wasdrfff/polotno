import { CollectionCard } from "./collection-card";
import { Block, Content, Title } from "./material-page-styled";
import { useMaterialPage } from "./use-matetial-page";

export const MaterialNamePage = () => {
  const { collectionCards } = useMaterialPage();
  return (
    <Content>
      <Title>Название бренда</Title>
      <Block>
        {collectionCards.map((collectionCard) => {
          return (
            <CollectionCard
              key={collectionCard.id}
              imgUrl={collectionCard.card.imageUrl}
              characteristic={collectionCard.card.characteristic}
              collectionName={collectionCard.card.collectionName}
            />
          );
        })}
      </Block>
    </Content>
  );
};
