import { useEffect, useState } from "react";

export const useInteriorsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/interiors-projects")
      .then((res) => res.json())
      .then((res) => {
        let projectsNew = res.data.map((item: any) => {
          console.log(item);
          return {
            id: item.id,
            title: item.attributes.title,
            plan: item.attributes.planUrl,
            blueprint: item.attributes.blueprintUrl,
          };
        });
        setProjects(projectsNew);
      })
      .catch(() => console.log("Server status: off"));
  }, []);

  return {
    projects,
  };
};
