import "./style.scss";
import image from "../main-page/assets/images/IMG_3.jpg";
import { BreadCrumbs } from "../../components/bread-crumbs";

export const MaterialPage = () => {
  return (
    <div>
      <BreadCrumbs />
      <div className="material-page">
        <p>Название бренда</p>
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
    </div>
  );
};
