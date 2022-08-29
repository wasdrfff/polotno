import "./style.scss";

type TProps = {
  imgUrl: string;
  description: string;
};

export const CardStage = ({ imgUrl, description }: TProps) => {
  return (
    <div className="card-stage">
      <img src={imgUrl} alt='' className="card-stage__image" />
      <span className="card-stage__description">{description}</span>
    </div>
  );
};
