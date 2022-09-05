import { useHistory } from "react-router-dom";
import { CardProject } from "../../components/card-project/index";
import { cardsProject } from "./data";
import "./style.scss";
import { Button } from "../../components/button";
import { CustomSlider } from "../../components/slider";
import slider1 from "../main-page/assets/images/IMG_3.jpg";

export const InteriorDesign = () => {
  const history = useHistory();
  const sendToTheQuestionnaire = () => {
    history.push("/questionnaire");
  };
  const sendToContacts = () => {
    history.push("/contact");
  };
  return (
    <div>
      <div className="interior-design">
        <p className="interior-design__title">
          Разработка дизайн-проектов интерьера жилых и общественных помещений
        </p>
        <div className="interior-design__slider">
          <CustomSlider>
            <img src={slider1} alt="slider" />
            <img src={slider1} alt="slider" />
          </CustomSlider>
        </div>
        <p className="interior-design__title">
          Услуги по проектированию проекта
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
        <div className="interior-design__actions">
          <Button onClick={sendToTheQuestionnaire}>Заполнить анкету</Button>
          <Button onClick={sendToContacts}>Заказать звонок</Button>
        </div>
      </div>
    </div>
  );
};
