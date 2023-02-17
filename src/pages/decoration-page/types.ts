export type TPage = {
  cards: TCard[];
};

type TCard = {
  id: number;
  title: string;
  image: {
    id: number;
    name: string;
    url: string;
  };
};
