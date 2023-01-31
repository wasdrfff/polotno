export type TCard = {
  id: number;
  description: string;
  exampleLink: string;
  slide: TSlide[];
};

export type TSlide = {
  id: number;
  url: string;
  name: string;
  description: string;
};
