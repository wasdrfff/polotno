import image from "../main-page/assets/images/IMG_3.jpg";
import "./style.scss";
export const FurniturePage = () => {
  return (
    <div className="furniture-page">
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
    </div>
  );
};
