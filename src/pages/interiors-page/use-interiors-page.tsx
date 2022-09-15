import { useEffect, useState } from "react";
import { api } from "../../utils/api";

type TProject = {
  blueprintUrl: string;
  planUrl: string;
  title: string;
  id: number;
};

export const useInteriorsPage = () => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    api<TProject[]>(
      "https://polotno-strapi.herokuapp.com/api/interiors-projects"
    ).then((resp) => setProjects(resp));
  }, []);

  return {
    projects,
  };
};
