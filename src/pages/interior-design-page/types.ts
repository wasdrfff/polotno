export type TPage = {
  id: string;
  slides: TImage[];
  projectCards: TProjectCard[];
};

type TProjectCard = {
  id: string;
  image: TImage;
  pdfUrl: string;
  title: string;
  workingTime: string;
  details: TDetail[];
};

type TImage = {
  id: number;
  url: string;
  name: string;
};

type TDetail = {
  id: string;
  detail: string;
};
