import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TPage } from "./types";

export const useFurnitureManufacturing = () => {
  const [furniturePageData, setFurniturePageData] = useState<TPage>();

  useEffect(() => {
    api<TPage>("/api/furniture-page").then((resp) => {
      setFurniturePageData(resp.attributes);
    });
  }, []);
  return {
    furniturePageData,
  };
};
