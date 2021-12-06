import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
type TProps = {
  children: JSX.Element[];
};
export const CustomSlider = (props: TProps) => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="custom-slider">
        {props.children}
      </Slider>
    </div>
  );
};
