import { Plan1 } from "./plan-1";
import { Plan2 } from "./plan-2";
import "./style.scss";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { Plan3 } from "./plan-3";
import { Plan4 } from "./plan-4";
import { BreadCrumbs } from "../../../../components/bread-crumbs";

export const PlanPage = () => {
  const { id } = useParams<{ id: string }>();

  const plan = useMemo(() => {
    switch (id) {
      case "1":
        return <Plan1 />;
      case "2":
        return <Plan2 />;
      case "3":
        return <Plan3 />;
      case "4":
        return <Plan4 />;
    }
  }, [id]);

  return (
    <div>
      <BreadCrumbs />
      {plan}
    </div>
  );
};
