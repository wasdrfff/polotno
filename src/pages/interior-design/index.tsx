import { useHistory } from "react-router-dom";
import { CardProject } from "../../components/card-project/index";
import { cardsProject } from "./data";
import "./style.scss";
import { Button } from "../../components/button";
import slider1 from "../main-page/assets/images/IMG_3.jpg";
import {ScreenType, useScreenType} from "../../utils/screen-mode";
import {useMemo} from "react";
import {SliderMaterialUi} from "../../components/slider-material-ui";

export const InteriorDesign = () => {
  const history = useHistory();

  const sendToTheQuestionnaire = () => {
    history.push("/questionnaire");
  };
  const sendToContacts = () => {
    history.push("/contact");
  };

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const items = useMemo(
    () => [
      {
        // Image item:
        id: 1,
        image: {
          url: slider1,
          description: "sample-description",
          name: "string",
        },
      },
      {
        // Image item:
        id: 2,
        image: {
          url: slider1,
          description: "sample-description",
          name: "string",
        },
      },
    ],
    []
  );

  return (
    <div>
      <div className="interior-design">
        <p className="interior-design__title">
          Разработка дизайн-проектов интерьера жилых и общественных помещений
        </p>
        <div className="interior-design__slider">
          <SliderMaterialUi items={items} height={isDesktop ? 650 : 235} />
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
