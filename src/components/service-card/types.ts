export type TCard = {
  id: number;
  title: string;
  slides: TSlide[];
};

export type TSlide = {
  id: number;
  url: string;
  name: string;
};
