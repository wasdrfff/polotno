import { Link } from "react-router-dom";
import "./style.scss";

type TProps = {
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
        <p className="card-project__title">{title}</p>
        <p className="card-project__time-work">{timeWork}</p>
        {exampleLink && (
          <Link to={exampleLink} className="card-project__example-link">
            Пример
          </Link>
        )}
      </div>
      <div className="card-project__details">
        <ul className="card-project__list">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="card-project__picture">
        <img src={imgUrl} alt="картинка" />
      </div>
    </div>
  );
};
