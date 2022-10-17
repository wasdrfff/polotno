import { TCommonResponse } from "../../utils/api/api";

type TCard = {
  card: {
    id: number;
    urlImage: string;
    url: string;
    description: string;
  };
};

export type TPage = {
  title: string;
  examples: {
    data: TCommonResponse<TCard>[];
  };
};
