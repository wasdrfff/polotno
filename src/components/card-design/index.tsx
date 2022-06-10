import { Link } from "react-router-dom";
import "./style.scss";
type TProps = {
  title: string;
  photo: string;
  projectId: string;
};
export const CardDesign = ({ title, photo, projectId }: TProps) => {
  return (
    <div>
      <span className="card-title">{title}</span>
      <div className="card-design">
        <div className="card-design__description">
          <Link to={`/portfolio/interiordesign/plan/${projectId}`}>
            <div className="card-design__plan">
              <span>План</span>
            </div>
          </Link>
          <Link to={`/portfolio/interiordesign/blueprint/${projectId}`}>
            <div className="card-design__blueprint">
              <img src={photo} alt="123" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
