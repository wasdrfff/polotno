import { useEffect, useState } from "react";
import { api } from "../../utils/api";

type TProject = {
  id: number;
  title: string;
  area: string;
  imageUrl: string;
  link: string;
};

export const useInteriorsPage = () => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    api<TProject[]>("/api/interiors-projects").then((resp) =>
      setProjects(resp.map((e: any) => ({ ...e.attributes.card, id: e.id })))
    );
  }, []);
  return {
    projects,
  };
};
