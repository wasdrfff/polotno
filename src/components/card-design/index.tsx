import { Link } from "react-router-dom";
import "./style.scss";
type TProps = {
  title: string;
  plan: string;
  blueprint: string;
  projectId: string;
};
export const CardDesign = ({ title, plan, blueprint, projectId }: TProps) => {
  return (
    <>
      <span className="card-title">{title}</span>
      <div className="card-design">
        <div className="card-design__description">
          <Link to={`/portfolio/interiordesign/plan/${projectId}`}>
            <div className="card-design__plan">
              <img src={plan} alt="plan" />
            </div>
          </Link>
          <Link to={`/portfolio/interiordesign/blueprint/${projectId}`}>
            <div className="card-design__blueprint">
              <img src={blueprint} alt="blueprint" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
