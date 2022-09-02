import image3 from "../../../main-page/assets/images/IMG_3.jpg";
import image26 from "../../../main-page/assets/images/IMG_26.jpg";
import "./style.scss";

export const Plan1 = () => {
  return (
    <div className="plan-container">
      <p>Квартира в Екатеринбурге,167 кв.м</p>

      <p>Планировочное решение </p>
      <img className="plan-container__image" src={image3} alt="plan" />

      <p>План до начала работ</p>
      <img className="plan-container__image" src={image26} alt="plan" />
    </div>
  );
};
