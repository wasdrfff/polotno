import { CustomSlider } from "../../../../components/slider";
import image3 from "../../../main/assets/images/IMG_3.jpg";
import image26 from "../../../main/assets/images/IMG_26.jpg";
import "./style.scss";
export const Blueprint4 = () => {
  return (
    <div className="blueprint-countainer">
      <p>Квартира в Екатеринбурге,167 кв.м</p>
      <CustomSlider>
        <img src={image3} alt="slider" />
        <img src={image26} alt="slider" />
        <img src={image3} alt="slider" />
        <img src={image26} alt="slider" />
      </CustomSlider>
    </div>
  );
};
