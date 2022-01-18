import { Link } from "react-router-dom";
import "./style.scss";

type TProps = {
  img: string;
  description: string;
};

export const CardDecor = (props: TProps) => {
  return (
    <div className="card-decor">
      <Link to="/brandName">
        <div className="card-decor__item">
          <img src={props.img} alt="material" />
          <span>{props.description}</span>
        </div>
      </Link>
    </div>
  );
};
