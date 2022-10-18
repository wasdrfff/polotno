import { Link } from "react-router-dom";
import "./style.scss";

type TProps = {
  img: string;
  description: string;
};

export const CardDecor = ({ img, description }: TProps) => {
  return (
    <div className="card-decor">
      <Link to="/material-name">
        <div className="card-decor__item">
          <img src={img} alt="material" />
          <span>{description}</span>
        </div>
      </Link>
    </div>
  );
};
