export type TPage = {
  image: TImage;
  slides: TSlide[];
};

type TImage = {
  id: number;
  url: string;
  name: string;
};
type TSlide = {
  id: number;
  url: string;
  name: string;
};
