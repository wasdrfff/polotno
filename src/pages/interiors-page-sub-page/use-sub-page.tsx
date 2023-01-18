import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import { TPage } from "./types";

const params = {
  populate: {
    page: {
      populate: ["image"],
    },
  },
};

export const useSubPage = () => {
  const [subPageApiResult, setSubPageApiResult] = useState<TPage>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    api<TPage>(`/api/interiors-sub-pages/${id}`, params).then((res) => {
      setSubPageApiResult(res.attributes);
    });
  }, [id]);

  return { subPageApiResult };
};
