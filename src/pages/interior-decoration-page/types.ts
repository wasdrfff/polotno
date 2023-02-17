export type TPage = {
  slides: TSlide[];
  cards: TCard[];
};

type TCard = {
  id: number;
  title: string;
  slides: TSlide[];
};

type TSlide = {
  id: number;
  name: string;
  url: string;
};
