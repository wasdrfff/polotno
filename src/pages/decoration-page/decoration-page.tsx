import { Button } from "../../components/button";
import "./style.scss";
import { PageWrapper, Wrapper } from "./decoration-page-styled";
import { useDecoration } from "./use-decoration";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { useHistory } from "react-router-dom";

export const DecorationPage = () => {
  const {
    kitchenItems,
    badRoomItems,
    livingRoomItems,
    childrensRoomsItems,
    otherRoomsItems,
  } = useDecoration();

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const history = useHistory();
  function navigateToInteriors() {
    history.push("/interiors");
  }

  return (
    <PageWrapper>
      <Wrapper>
        <span className="portfolioPage__title-page">
          Декорирование интерьера текстилем
        </span>

        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">Гостиные</span>
          <SliderMaterialUi
            items={livingRoomItems}
            height={isDesktop ? 650 : 235}
          />
        </div>
        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">
            Кухни, столовые
          </span>
          <SliderMaterialUi
            items={kitchenItems}
            height={isDesktop ? 650 : 235}
          />
        </div>
        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">
            Спальни, кабинеты
          </span>
          <SliderMaterialUi
            items={badRoomItems}
            height={isDesktop ? 650 : 235}
          />
        </div>
        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">Детские</span>
          <SliderMaterialUi
            items={childrensRoomsItems}
            height={isDesktop ? 650 : 235}
          />
        </div>
        <div className="portfolioPage__block">
          <span className="portfolioPage__description-block">
            Другие помещения
          </span>
          <SliderMaterialUi
            items={otherRoomsItems}
            height={isDesktop ? 650 : 235}
          />
        </div>
      </Wrapper>
      <div>
        <Button onClick={navigateToInteriors}>Дизайн интерьера</Button>
      </div>
    </PageWrapper>
  );
};
