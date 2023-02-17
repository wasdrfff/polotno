import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TInterior } from "./types";

export const useInteriorsPage = () => {
  const [interiorsData, setInteriorsData] = useState<TInterior[]>();

  useEffect(() => {
    const params = {
      populate: {
        card: {
          populate: ["image"],
        },
        slides: {
          populate: ["image"],
        },
        blueprints: {
          populate: ["image"],
        },
        plans: {
          populate: ["image"],
        },
      },
    };
    api<TInterior[]>("/api/interiors", params).then((resp) => {
      setInteriorsData(
        resp.map((el: any) => ({ ...el.attributes, id: el.id }))
      );
    });
  }, []);
  return {
    interiorsData,
  };
};
