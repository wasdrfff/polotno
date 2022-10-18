import { useEffect, useState } from "react";
import { TProjectCard } from "../../components/card-project/types";
import { TItem } from "../../components/slider-material-ui";
import { api } from "../../utils/api";

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
