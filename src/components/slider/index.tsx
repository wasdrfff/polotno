import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import leftArrow from "./assets/image/left-arrow.svg";
import rightArrow from "./assets/image/right-arrow.svg";
const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  nextArrow: <img src={rightArrow} alt="next slide" />,
  prevArrow: <img src={leftArrow} alt="prev slide" />,
};

type TProps = {
  children: JSX.Element[];
};

export const CustomSlider = ({ children }: TProps) => {
  return (
    <div>
      <Slider {...settings} className="custom-slider">
        {children}
      </Slider>
    </div>
  );
};
