import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TPage } from "./types";

export const useInteriorDesign = () => {
  const [interiorDesignData, setInteriorDesignData] = useState<TPage>();

  useEffect(() => {
    const params = {
      populate: {
        projectCards: {
          populate: ["image", "details"],
        },
        slides: {
          populate: ["*"],
        },
      },
    };
    api<TPage>("/api/interior-design-page", params).then((resp) => {
      setInteriorDesignData(resp.attributes);
    });
  }, []);
  return {
    interiorDesignData,
  };
};
