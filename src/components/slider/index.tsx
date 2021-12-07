import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import arrow from "./assets/image/arrow.svg";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  nextArrow: <img src={arrow} alt="nextSlide" />,
  prevArrow: <img src={arrow} alt="prevSlide" />,
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
