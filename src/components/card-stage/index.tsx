import "./style.scss";

type TProps = {
  imgUrl: string;
  imgName: string;
  description: string;
};

export const CardStage = ({ imgUrl, imgName, description }: TProps) => {
  return (
    <div className="card-stage">
      <img src={imgUrl} alt={imgName} className="card-stage__image" />
      <span className="card-stage__description">{description}</span>
    </div>
  );
};
