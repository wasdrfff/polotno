import image3 from "../../../main-page/assets/images/IMG_3.jpg";
import image26 from "../../../main-page/assets/images/IMG_26.jpg";
import "./style.scss";
import {ScreenType, useScreenType} from "../../../../utils/screen-mode";
import {useMemo} from "react";
import {SliderMaterialUi} from "../../../../components/slider-material-ui";

export const Blueprint3 = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const items = useMemo(
    () => [
      {
        // Image item:
        id: 1,
        image: {
          url: image3,
          description: "sample-description",
          name: "string",
        },
      },
      {
        // Image item:
        id: 2,
        image: {
          url: image26,
          description: "sample-description",
          name: "string",
        },
      },
    ],
    []
  );
  return (
    <div className="blueprint-countainer">
      <p>Квартира в Екатеринбурге,167 кв.м</p>
      <SliderMaterialUi items={items} height={isDesktop ? 650 : 235} />
    </div>
  );
};
