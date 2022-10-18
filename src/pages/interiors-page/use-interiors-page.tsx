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
    api<TProject[]>("/api/interiors-projects").then((resp) =>
      setProjects(resp.map((e: any) => ({ ...e.attributes, id: e.id })))
    );
  }, []);

  return {
    projects,
  };
};
