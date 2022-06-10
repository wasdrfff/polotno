import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import image from "../main/assets/images/IMG_3.jpg";
import "./style.scss";
export const FurniturePage = () => {
  return (
    <div className="furniture-page">
      <Header />
      <div className="furniture-page__content">
        <p>
          ПРОЕКТИРОВАНИЕ И ИЗГОТОВЛЕНИЕ КОПРУСНОЙ МЕБЕЛИ ПО ИНДИВИДУАЛЬНЫМ
          РАЗМЕРАМ
        </p>
        <div className="furniture-page__examples-works">
          <img src={image} alt="work" />
          <button>Примеры работ</button>
        </div>
        <div className="furniture-page__examples-drawings">
          <img src={image} alt="drawings" />
          <button>Примеры чертежей</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
