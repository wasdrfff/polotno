export type TPage = {
  cards: TCard[];
};

type TCard = {
  id: number;
  title: string;
  image: TImage;
  slides: TImage[];
};

type TImage = {
  id: number;
  name: string;
  url: string;
};
