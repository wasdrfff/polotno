import { useEffect, useState } from "react";
import { TItem } from "../../components/slider-material-ui";
import { api } from "../../utils/api";

export const useDecoration = () => {
  const [kitchenItems, setKitchenItems] = useState<TItem[]>([]);
  const [badRoomItems, setBadRoomItems] = useState<TItem[]>([]);
  const [livingRoomItems, setLivingRoomItems] = useState<TItem[]>([]);
  const [childrensRoomsItems, setChildrensRoomsItems] = useState<TItem[]>([]);
  const [otherRoomsItems, setOtherRoomsItems] = useState<TItem[]>([]);

  useEffect(() => {
    api<TItem[]>("/api/decoration-slider-kitchen-images").then((resp) => {
      setKitchenItems(resp.map((e: any) => ({ ...e.attributes, id: e.id })));
    });
    api<TItem[]>("/api/decoration-slider-badroom-images").then((resp) => {
      setBadRoomItems(resp.map((e: any) => ({ ...e.attributes, id: e.id })));
    });
    api<TItem[]>("/api/decoration-slider-living-room-images").then((resp) =>
      setLivingRoomItems(resp.map((e: any) => ({ ...e.attributes, id: e.id })))
    );
    api<TItem[]>("/api/decoration-slider-childrensrooms-images").then((resp) =>
      setChildrensRoomsItems(
        resp.map((e: any) => ({ ...e.attributes, id: e.id }))
      )
    );
    api<TItem[]>("/api/decoration-slider-otherrooms-images").then((resp) =>
      setOtherRoomsItems(resp.map((e: any) => ({ ...e.attributes, id: e.id })))
    );
  }, []);

  return {
    kitchenItems,
    badRoomItems,
    livingRoomItems,
    childrensRoomsItems,
    otherRoomsItems,
  };
};
