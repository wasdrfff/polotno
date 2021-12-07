import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import leftArrow from "./assets/image/left-arrow.svg";
import rightArrow from "./assets/image/right-arrow.svg";

const SlickButtonFix = ({currentSlide, slideCount, children, ...props}:any) => (
  <span {...props}>{children}</span>
);

const SETTINGS = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  nextArrow: <SlickButtonFix><img src={rightArrow} alt="next slide" /></SlickButtonFix>,
  prevArrow: <SlickButtonFix><img src={leftArrow} alt="prev slide" /></SlickButtonFix>,
};

type Props = {
  children: JSX.Element[];
};

export const CustomSlider = ({ children }: Props) => {
  return (
    <div>
      <Slider {...SETTINGS} className="custom-slider">
        {children}
      </Slider>
    </div>
  );
};
