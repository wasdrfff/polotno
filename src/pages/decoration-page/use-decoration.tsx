import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TItem } from "./types";

export const useDecoration = () => {
  const [cardItems, setCardItems] = useState<TItem[]>([]);

  useEffect(() => {
    api<TItem[]>("/api/decoration-pages").then((resp) => {
      setCardItems(resp.map((e: any) => ({ ...e.attributes, id: e.id })));
    });
  }, []);

  return {
    cardItems,
  };
};
