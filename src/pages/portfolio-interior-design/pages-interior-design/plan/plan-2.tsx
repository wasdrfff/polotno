import image3 from "../../../main/assets/images/IMG_3.jpg";
import image26 from "../../../main/assets/images/IMG_26.jpg";

export const Plan2 = () => {
  return (
    <div className="plan-container">
      <h2>Офис в Екатеринбурге,145 кв.м</h2>
        <p>Планировочное решение </p>
        <img className="plan-container__image" src={image3} alt="plan" />
        <p>План до начала работ</p>
        <img className="plan-container__image" src={image26} alt="plan" />
    </div>
  );
};
