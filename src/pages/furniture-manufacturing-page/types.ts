export type TPage = {
  id: number;
  slides: TSlide[];
  drawings: TDrawing[];
};

type TSlide = {
  id: number;
  url: string;
  name: string;
};

type TDrawing = {
  id: number;
  url: string;
  name: string;
};
