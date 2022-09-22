import { useEffect, useState } from "react";
import { TProjectCard } from "../../components/card-project/types";
import { TItem } from "../../components/slider-material-ui";
import { api } from "../../utils/api";

export const useInteriorDesign = () => {
  const [interiorItems, setInteriorItems] = useState<TItem[]>([]);
  const [projectCards, setProjectCards] = useState<TProjectCard[]>([]);

  useEffect(() => {
    api<TItem[]>("/api/interior-desing-sliders").then((resp) => {
      setInteriorItems(resp);
    });
    api<TProjectCard[]>("/api/interior-design-card-projects").then((resp) =>
      setProjectCards(resp)
    );
  }, []);

  return {
    interiorItems,
    projectCards,
  };
};
