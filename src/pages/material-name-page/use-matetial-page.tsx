import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TCollectionCard } from "./types";

export const useMaterialPage = () => {
  const [collectionCards, setCollectionCards] = useState<TCollectionCard[]>([]);

  useEffect(() => {
    api<TCollectionCard[]>("/api/material-pages").then((resp) => {
      setCollectionCards(resp);
    });
  }, []);

  return {
    collectionCards,
  };
};
