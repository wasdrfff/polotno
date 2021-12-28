import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import "./style.scss";
import imaage from "../main/assets/images/IMG_3.jpg";
export const MaterialPage = () => {
  return (
    <div>
      <Header />
      <div className="material-page">
        <h1>Название бренда</h1>
        <div className="material-page__content">
          <div className="material-page__row">
            <img src={imaage} alt="22222" />
            <span>Название коллекции.</span>
            <span>характеристика</span>
          </div>
          <div className="material-page__row-inversion">
            <span>Название коллекции.</span>
            <span>характеристика</span>
            <img src={imaage} alt="22222" />
          </div>
          <div className="material-page__row">
            <img src={imaage} alt="22222" />
            <span>Название коллекции.</span>
            <span>характеристика</span>
          </div>
          <div className="material-page__row-inversion">
            <span>Название коллекции.</span>
            <span>характеристика</span>
            <img src={imaage} alt="22222" />
          </div>
          <div className="material-page__row">
            <img src={imaage} alt="22222" />
            <span>Название коллекции.</span>
            <span>характеристика</span>
          </div>
          <div className="material-page__row-inversion">
            <span>Название коллекции.</span>
            <span>характеристика</span>
            <img src={imaage} alt="22222" />
          </div>
          <div className="material-page__row">
            <img src={imaage} alt="22222" />
            <span>Название коллекции.</span>
            <span>характеристика</span>
          </div>
          <div className="material-page__row-inversion">
            <span>Название коллекции.</span>
            <span>характеристика</span>
            <img src={imaage} alt="22222" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
