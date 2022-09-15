//@ts-ignore
//@ts-nocheck
import { useEffect, useState } from "react";

export const useDecoration = () => {
  const [kitchenItems, setKitchenItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/DECORATION-SLIDER-KITCHEN-IMAGEs")
      .then((res) => res.json())
      .then((res) => {
        let kitchenItemsData: Item[] = res.data.map((item: any) => {
          console.log(item);
          const newItem: Item = {
            itemId: item.id,
            mediaUrl: item.attributes.url,
            metaData: {
              type: "image",
              height: 3024,
              width: 4032,
              title: item.attributes.name,
              description: item.attributes.descrition,
              focalPoint: [0, 0],
              isExternal: true,
            },
          };
          return newItem;
        });

        setKitchenItems(kitchenItemsData);
      });
  }, []);

  const kitchenSlider = {
    items: kitchenItems,
  };

  return {
    kitchenSlider,
  };
};
