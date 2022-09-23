import { useEffect, useState } from "react";
import { TItem } from "../../components/slider-material-ui";
import { api } from "../../utils/api";

export const useFurnitureManufacturing = () => {
  const [furnitureManufacturingItems, setFurnitureManufacturing] = useState<
    TItem[]
  >([]);
  const [drawingItems, setDrawingItems] = useState<TItem[]>([]);

  useEffect(() => {
    api<TItem[]>("/api/furniture-sliders").then((resp) => {
      setFurnitureManufacturing(resp);
    });
    api<TItem[]>("/api/furniture-drawings").then((resp) => {
      setDrawingItems(resp);
    });
  }, []);
  return {
    furnitureManufacturingItems,
    drawingItems,
  };
};
