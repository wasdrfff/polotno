import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TPage } from "./types";

export const useInterior = () => {
  const [interiorsDecorationPage, setInteriorsDecorationPage] =
    useState<TPage>();

  useEffect(() => {
    const params = {
      populate: {
        cards: {
          populate: ["slides"],
        },
        slides: {
          populate: ["image"],
        },
      },
    };

    api<TPage>("/api/interiors-decoration-page", params).then((resp) => {
      setInteriorsDecorationPage(resp.attributes);
    });
  }, []);

  return {
    interiorsDecorationPage,
  };
};
