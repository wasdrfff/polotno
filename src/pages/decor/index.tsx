import { CardDecor } from "../../components/card-decor";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import cart from "../main/assets/images/IMG_3.jpg";
import "./style.scss";
export const DecorPage = () => {
  return (
    <div>
      <Header />
      <div className="decor-page">
        <h2>Ткани,декор.</h2>
        <div className="decor-page__items">
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
          <CardDecor img={cart} description="Название бренда" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
