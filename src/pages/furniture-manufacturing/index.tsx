import { CustomSlider } from "../../components/slider";
import work from "./assets/images/works/work_1.jpg";
import work2 from "./assets/images/works/work_2.jpg";
import drawing from "./assets/images/drawings/drawing_1.jpg";
import drawing2 from "./assets/images/drawings/drawing_2.jpg";
import drawing3 from "./assets/images/drawings/drawing_3.jpg";
import drawing4 from "./assets/images/drawings/drawing_4.jpg";
import "./style.scss";
import { BreadCrumbs } from "../../components/bread-crumbs";

export const ManufacturingPage = () => {
  return (
    <div>
      <BreadCrumbs/>
      <div className="manufacturingPage">
        <div className="manufacturingPage__block">
          <span>
            Проектирование и изготовление корпусной мебели по индивидуальным
            размерам
          </span>
          <div className="manufacturingPage__slider">
            <CustomSlider>
              <img src={work} alt="work" />
              <img src={work2} alt="work" />
            </CustomSlider>
          </div>
        </div>
        <div className="manufacturingPage__block">
          <span>Чертежи</span>
          <div className="manufacturingPage__drawings">
            <div className="manufacturingPage__drawing">
              <img src={drawing} alt="drawing" />
            </div>
            <div className="manufacturingPage__drawing">
              <img src={drawing2} alt="drawing" />
            </div>
            <div className="manufacturingPage__drawing">
              <img src={drawing3} alt="drawing" />
            </div>
            <div className="manufacturingPage__drawing">
              <img src={drawing4} alt="drawing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
