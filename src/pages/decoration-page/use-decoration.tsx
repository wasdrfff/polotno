import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TPage } from "./types";

export const useDecoration = () => {
  const [decorationData, setDecorationData] = useState<TPage>();

  useEffect(() => {
    const params = {
      populate: {
        cards: {
          populate: ["image"],
        },
      },
    };

    api<TPage>("/api/decoration-page", params).then((resp) => {
      setDecorationData(resp.attributes);
    });
  }, []);
  return {
    decorationData,
  };
};
