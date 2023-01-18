export type TPage = {
  page: {
    id: number;
    title: string;
    image: TItem[];
    planImageUrl: string;
    blueprintImageUrl: string;
  };
};
type TItem = {
  id: number;
  url: string;
  name: string;
  description: string;
};
