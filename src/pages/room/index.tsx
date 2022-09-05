import "./style.scss";
import image from "../main-page/assets/images/IMG_3.jpg";
import geolocation from "./assets/images/geolocation.svg";
import squere from "./assets/images/squere.svg";
import house from "./assets/images/house.svg";
import customer from "./assets/images/customer.svg";
import { BreadCrumbs } from "../../components/bread-crumbs";

export const RoomPage = () => {
  return (
    <div>
      <BreadCrumbs />
      <div className="room-page">
        <p>Название проекта</p>
        <img src={image} alt="1" />
        <div className="room-page__services">
          <div className="room-page__service">
            <img src={geolocation} alt="geolocation" />
            <span>Местоположение</span>
          </div>
          <div className="room-page__service">
            <img src={squere} alt="squere" />
            <span>Площадь</span>
          </div>
          <div className="room-page__service">
            <img src={house} alt="house" />
            <span>Наименование объекта</span>
          </div>
          <div className="room-page__service">
            <img src={customer} alt="customer" />
            <span>Заказчик</span>
          </div>
        </div>
        <div className="room-page__content">
          <div className="room-page__block">
            <label>План препланировки</label>
            <img src={image} alt="Картинка" />
          </div>
          <div className="room-page__block">
            <label>Название помещения</label>
            <img src={image} alt="Картинка" />
          </div>
          <div className="room-page__block">
            <label>Название помещения</label>
            <img src={image} alt="Картинка" />
          </div>
          <div className="room-page__block">
            <label>Название помещения</label>
            <img src={image} alt="Картинка" />
          </div>
          <div className="room-page__block">
            <label>Название помещения</label>
            <img src={image} alt="Картинка" />
          </div>
          <div className="room-page__block">
            <label>Название помещения</label>
            <img src={image} alt="Картинка" />
          </div>
          <div className="room-page__block">
            <label>Название помещения</label>
            <img src={image} alt="Картинка" />
          </div>
        </div>
        <button>Заказать проект</button>
      </div>
    </div>
  );
};
