import { Link } from "react-router-dom";
import "./style.scss";

type TProps = {
  imgUrl: any;
  imgName: string;
  description: string;
  exampleLink: string;
};

export const CardService = ({
  exampleLink,
  imgUrl,
  imgName,
  description,
}: TProps) => {
  return (
    <div className="card-service">
      <Link to={exampleLink} className="card-service__example-link">
        <img src={imgUrl} alt={imgName} className="card-service__image" />
        <span className="card-service__description">{description}</span>
      </Link>
    </div>
  );
};
