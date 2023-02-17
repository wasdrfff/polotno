import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { TPage } from "./types";

export const useMainPage = () => {
  const [mainPageData, setMainPageData] = useState<TPage>();
  useEffect(() => {
    api<TPage>("/api/main-page").then((resp) => {
      setMainPageData(resp.attributes);
    });
  }, []);

  return { mainPageData };
};
