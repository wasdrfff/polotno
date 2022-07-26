import { Link } from "react-router-dom";
import "./style.scss";

type TProps = {
  imgUrls: string[];
  imgName: string;
  description: string;
  exampleLink: string;
};

export const CardService = ({
  exampleLink,
  imgUrls,
  imgName,
  description,
}: TProps) => {
  return (
    <div className="card-service">
      <Link to={exampleLink} className="card-service__example-link">
        <div className="card-service__images">
          {imgUrls.map((imgUrl, id) => {
            return (
              <img
                key={id}
                src={imgUrl}
                alt={imgName}
                className="card-service__image"
              />
            );
          })}
        </div>
        <span className="card-service__description">{description}</span>
      </Link>
    </div>
  );
};
