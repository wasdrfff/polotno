import { CardDecor } from "../../components/decor-card";
import cart from "../main-page/assets/images/IMG_3.jpg";
import "./style.scss";
export const DecorPage = () => {
  return (
    <div>
      <div className="decor-page">
        <p>Ткани,декор.</p>
        <div className="decor-page__items">
          <CardDecor img={cart} description="123" />
          <CardDecor img={cart} description="777" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
        </div>
      </div>
    </div>
  );
};
