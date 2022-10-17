import { useEffect, useState } from "react";
import { TCard } from "../../components/card-service/types";
import { TItem } from "../../components/slider-material-ui";
import { api } from "../../utils/api";

export const useInterior = () => {
  const [interiorItems, setInteriorItems] = useState<TItem[]>([]);
  const [cardsService, setCardsService] = useState<TCard[]>([]);

  useEffect(() => {
    api<TItem[]>("/api/interior-decoration-sliders").then((resp) => {
      setInteriorItems(resp.map((e: any) => ({ ...e.attributes, id: e.id })));
    });
    api<TCard[]>("/api/interior-card-services").then((resp) => {
      setCardsService(resp.map((e: any) => ({ ...e.attributes, id: e.id })));
    });
  }, []);
  return {
    interiorItems,
    cardsService,
  };
};
