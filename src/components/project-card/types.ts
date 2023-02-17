export type TProps = {
  title: string;
  subTitle: string;
  details: TDetail[];
  imageUrl: string;
  fileLink?: string;
};

type TDetail = {
  id: string;
  detail: string;
};
