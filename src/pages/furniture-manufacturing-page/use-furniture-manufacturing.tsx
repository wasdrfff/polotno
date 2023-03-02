import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TPage } from "./types";

export const useFurnitureManufacturing = () => {
  const [furniturePageData, setFurniturePageData] = useState<TPage>();

  useEffect(() => {
    const params = {
      populate: {
        drawingCards: {
          populate: ["drawing", "details"],
        },
        slides: {
          populate: ["slide"],
        },
      },
    };
    api<TPage>("/api/furniture-page", params).then((resp) => {
      setFurniturePageData(resp.attributes);
    });
  }, []);
  return {
    furniturePageData,
  };
};
