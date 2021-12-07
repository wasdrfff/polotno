import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Arrow from "./assets/image/arrow.svg";
type TProps = {
  children: JSX.Element[];
};

export const CustomSlider = ({ children }: TProps) => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={Arrow} alt="nextSlide" />,
    prevArrow: <img src={Arrow} alt="prevSlide" />,
  };
  return (
    <div>
      <Slider {...settings} className="custom-slider">
        {children}
      </Slider>
    </div>
  );
};
