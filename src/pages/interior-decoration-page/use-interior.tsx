import { useEffect, useState } from "react";
import { TCard } from "../../components/service-card/types";
import { TItem } from "../../components/slider-material-ui";
import { api } from "../../utils/api";

export const useInterior = () => {
  const [interiorItems, setInteriorItems] = useState<TItem[]>([]);
  const [serviceCards, setServiceCards] = useState<TCard[]>([]);

  useEffect(() => {
    api<TItem[]>("/api/interior-decoration-sliders").then((resp) => {
      setInteriorItems(
        resp.map((e: any) => ({
          ...e.attributes,

          id: e.id,
        }))
      );
    });
  }, []);

  useEffect(() => {
    const params = {
      populate: {
        card: {
          populate: ["slide"],
        },
      },
    };
    api<TCard[]>("/api/interior-card-services", params).then((resp) => {
      setServiceCards(
        resp.map((e: any) => ({
          ...e.attributes,
          ...e.attributes.card,
          id: e.id,
        }))
      );
    });
  }, []);
  return {
    interiorItems,
    cardsService: serviceCards,
  };
};
