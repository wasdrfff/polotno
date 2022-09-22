import { useHistory } from "react-router-dom";
import { CardProject } from "../../components/card-project/index";
import "./style.scss";
import { Button } from "../../components/button";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { useInteriorDesign } from "./use-interior-design";

export const InteriorDesignPage = () => {
  const history = useHistory();

  const sendToTheQuestionnaire = () => {
    history.push("/questionnaire");
  };
  const sendToContacts = () => {
    history.push("/contact");
  };

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const { interiorItems, projectCards } = useInteriorDesign();

  return (
    <div>
      <div className="interior-design">
        <p className="interior-design__title">
          Разработка дизайн-проектов интерьера жилых и общественных помещений
        </p>
        <div className="interior-design__slider">
          <SliderMaterialUi
            items={interiorItems}
            height={isDesktop ? 650 : 235}
          />
        </div>
        <p className="interior-design__title">
          Услуги по проектированию проекта
        </p>
        <div className="interior-design__content">
          {projectCards.map(({ projectCard }) => (
            <CardProject
              key={projectCard.title}
              title={projectCard.title}
              timeWork={projectCard.timeWork}
              details={projectCard.details.split("\n")}
              imgUrl={projectCard.imgUrl}
              exampleLink={projectCard.exampleLink}
            />
          ))}
        </div>
        <div className="interior-design__actions">
          <Button onClick={sendToTheQuestionnaire}>Заполнить анкету</Button>
          <Button onClick={sendToContacts}>Заказать звонок</Button>
        </div>
      </div>
    </div>
  );
};
