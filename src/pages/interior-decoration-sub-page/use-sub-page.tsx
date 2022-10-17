import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import { TPage } from "./types";

const params = {
  populate: {
    examples: {
      populate: ["card"],
    },
  },
};

export const useSubPage = () => {
  const [subPageApiResult, setSubPageApiResult] = useState<TPage>();
  const { subPage } = useParams<{ subPage: string }>();

  useEffect(() => {
    api<TPage>(`/api/interior-decoration-${subPage}`, params).then((res) => {
      setSubPageApiResult(res.attributes);
    });
  }, [subPage]);

  return { subPageApiResult };
};
