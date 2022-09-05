import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../../../../components/bread-crumbs";
import { Blueprint1 } from "./blueprint-1";
import { Blueprint2 } from "./blueprint-2";
import { Blueprint3 } from "./blueprint-3";
import { Blueprint4 } from "./blueprint-4";
import "./style.scss";

export const BlueprintPage = () => {
  const { id } = useParams<{ id: string }>();

  const blueprint = useMemo(() => {
    switch (id) {
      case "1":
        return <Blueprint1 />;
      case "2":
        return <Blueprint2 />;
      case "3":
        return <Blueprint3 />;
      case "4":
        return <Blueprint4 />;
    }
  }, [id]);

  return (
    <div>
      <BreadCrumbs />
      {blueprint}
    </div>
  );
};
