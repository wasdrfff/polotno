import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import "./style.scss";
import image from "../main/assets/images/IMG_3.jpg";
export const MaterialPage = () => {
  return (
    <div>
      <Header />
      <div className="material-page">
        <h1>Название бренда</h1>
        <div className="material-page__content">
          <div className="material-page__collection-card">
            <div className="material-page__image">
              <img src={image} alt="22222" />
            </div>
            <div className="material-page__description">
              <span>Название коллекции.</span>
              <span>характеристика</span>
            </div>
          </div>
          <div className="material-page__collection-card">
            <div className="material-page__image">
              <img src={image} alt="22222" />
            </div>
            <div className="material-page__description">
              <span>Название коллекции.</span>
              <span>характеристика</span>
            </div>
          </div>
          <div className="material-page__collection-card">
            <div className="material-page__image">
              <img src={image} alt="22222" />
            </div>
            <div className="material-page__description">
              <span>Название коллекции.</span>
              <span>характеристика</span>
            </div>
          </div>
          <div className="material-page__collection-card">
            <div className="material-page__image">
              <img src={image} alt="22222" />
            </div>
            <div className="material-page__description">
              <span>Название коллекции.</span>
              <span>характеристика</span>
            </div>
          </div>
          <div className="material-page__collection-card">
            <div className="material-page__image">
              <img src={image} alt="22222" />
            </div>
            <div className="material-page__description">
              <span>Название коллекции.</span>
              <span>характеристика</span>
            </div>
          </div>
          <div className="material-page__collection-card">
            <div className="material-page__image">
              <img src={image} alt="22222" />
            </div>
            <div className="material-page__description">
              <span>Название коллекции.</span>
              <span>характеристика</span>
            </div>
          </div>
          <div className="material-page__collection-card">
            <div className="material-page__image">
              <img src={image} alt="22222" />
            </div>
            <div className="material-page__description">
              <span>Название коллекции.</span>
              <span>характеристика</span>
            </div>
          </div>
          <div className="material-page__collection-card">
            <div className="material-page__image">
              <img src={image} alt="22222" />
            </div>
            <div className="material-page__description">
              <span>Название коллекции.</span>
              <span>характеристика</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
