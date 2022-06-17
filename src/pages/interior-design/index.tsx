import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CardProject } from "../../components/card-project/index";
import { cardsProject } from "./data";
import "./style.scss";

export const InteriorDesign = () => {
  return (
    <div>
      <Header />
      <div className="interior-design">
        <p className="interior-design__title">
          разработка дизайн-проектов интерьера жилых и общественных помещений
        </p>
        <img alt="картинка" />
        <p className="interior-design__title">
          услуги по проектированию проекта
        </p>
        <div className="interior-design__content">
          {cardsProject.map(
            ({ id, title, timeWork, details, imgUrl, exampleLink }) => (
              <CardProject
                key={id}
                title={title}
                timeWork={timeWork}
                details={details}
                imgUrl={imgUrl}
                exampleLink={exampleLink}
              />
            )
          )}
        </div>
        <div className="interior-design__links">
          <Link to="/questionnaire" className="interior-design__fill">
            Заполнить анкету
          </Link>
          <Link to="/contact" className="interior-design__to-order">
            Заказать обратный звонок
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
