export type TPage = {
  id: number;
  card: {
    id: number;
    title: string;
    area: string;
  };
  slides: TSlide[];
  plans: TImage[];
  blueprints: TImage[];
};
type TSlide = {
  id: number;
  url: string;
  name: string;
};

type TImage = {
  id: number;
  url: string;
  name: string;
};
