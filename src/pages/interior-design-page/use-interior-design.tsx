import { useEffect, useState } from "react";
import { TItem } from "../../components/slider-material-ui";
import { api } from "../../utils/api";

type TProjectCard = {
  id: number;
  projectCard: {
    title: string;
    timeWork: string;
    details: string;
    imgUrl: string;
    exampleLink?: string;
  };
};

export const useInteriorDesign = () => {
  const [interiorItems, setInteriorItems] = useState<TItem[]>([]);
  const [projectCards, setProjectCards] = useState<TProjectCard[]>([]);

  useEffect(() => {
    api<TItem[]>("/api/interior-desing-sliders").then((resp) => {
      setInteriorItems(resp.map((e: any) => ({ ...e.attributes, id: e.id })));
    });
    api<TProjectCard[]>("/api/interior-design-card-projects").then((resp) =>
      setProjectCards(resp.map((e: any) => ({ ...e.attributes, id: e.id })))
    );
  }, []);

  return {
    interiorItems,
    projectCards,
  };
};
