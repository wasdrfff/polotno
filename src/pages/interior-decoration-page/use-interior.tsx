import { useEffect, useState } from "react";
import { TCard } from "../../components/card-service/types";
import { TItem } from "../../components/slider-material-ui";
import { api } from "../../utils/api";

export const useInterior = () => {
  const [interiorItems, setInteriorItems] = useState<TItem[]>([]);
  const [cardsService, setCardService] = useState<TCard[]>([]);

  useEffect(() => {
    api<TItem[]>("/api/interior-decoration-sliders").then((resp) => {
      setInteriorItems(resp);
    });
    api<TCard[]>("/api/interior-card-services").then((resp) => {
      setCardService(resp);
    });
  }, []);
  return {
    interiorItems,
    cardsService,
  };
};
