export type TInterior = {
  id: number;
  card: TCard;
  slides: TSlide[];
  plans: TItem[];
  blueprints: TItem[];
};

type TCard = {
  id: number;
  area: string;
  title: string;
  image: TItem;
};

export type TCardExtended = TCard & {
  index: number;
  interiorId: number;
};

type TSlide = {
  id: number;
  name: string;
  url: string;
};
type TItem = {
  id: string;
  name: string;
  url: string;
};
