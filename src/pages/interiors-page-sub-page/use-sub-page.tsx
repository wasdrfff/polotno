import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import { TPage } from "./types";

export const useSubPage = () => {
  const [subPageApiResult, setSubPageApiResult] = useState<TPage>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    api<TPage>(`/api/interiors/${id}`).then((res) => {
      setSubPageApiResult(res.attributes);
    });
  }, [id]);
  return { subPageApiResult };
};
