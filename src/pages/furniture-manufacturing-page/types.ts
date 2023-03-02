export type TPage = {
  id: number;
  slides: TImage[];
  drawingCards: TDrawingCard[];
};

type TDrawingCard = {
  id: number;
  drawing: TImage;
  details: TDetail[];
};

type TImage = {
  id: number;
  url: string;
  name: string;
};

type TDetail = {
  id: number;
  detail: string;
};
