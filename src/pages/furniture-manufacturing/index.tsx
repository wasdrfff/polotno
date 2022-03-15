import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { CustomSlider } from "../../components/slider";
import work from "./assets/images/works/work_1.jpg";
import work2 from "./assets/images/works/work_2.jpg";
import drawing from "./assets/images/drawings/drawing_1.jpg";
import drawing3 from "./assets/images/drawings/drawing_3.jpg";
import drawing4 from "./assets/images/drawings/drawing_4.jpg";
import "./style.scss";

export const ManufacturingPage = () => {
  return (
    <div>
      <Header />
      <div className="manufacturingPage">
        <div className="manufacturingPage__block">
          <span>
            проектирование и изготовление корпусной мебели по индивидуальным
            размерам
          </span>
          <CustomSlider>
            <img src={work} alt="work" />
            <img src={work2} alt="work" />
          </CustomSlider>
          <span>примеры работ</span>
        </div>
        <div className="manufacturingPage__block">
          <CustomSlider>
            <img src={drawing} alt="drawing" />
            <img src={drawing3} alt="drawing" />
            <img src={drawing4} alt="drawing" />
          </CustomSlider>
          <span>чертежи</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};
