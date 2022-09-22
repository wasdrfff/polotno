import { Link } from "react-router-dom";
import "./style.scss";

export type TProps = {
  title: string;
  timeWork: string;
  details: string[];
  imgUrl: string;
  exampleLink?: string;
};
export const CardProject = ({
  title,
  timeWork,
  details,
  imgUrl,
  exampleLink,
}: TProps) => {
  return (
    <div className="card-project">
      <div className="card-project__description">
        <span className="card-project__title">{title}</span>
        <span className="card-project__time-work">{timeWork}</span>
        {exampleLink && (
          <Link to={exampleLink} className="card-project__example-link">
            Пример
          </Link>
        )}
      </div>
      <div className="card-project__details">
        <ul className="card-project__list">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="card-project__picture">
        <img src={imgUrl} alt="картинка" />
      </div>
    </div>
  );
};
