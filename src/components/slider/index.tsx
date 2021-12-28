import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import leftArrow from "./assets/image/left-arrow.svg";
import rightArrow from "./assets/image/right-arrow.svg";


type TProps = {
  children: JSX.Element[];
};

export const CustomSlider = ({ children }: TProps) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <img
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      type="button"
      src={leftArrow}
      alt="prev slide"
    />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <img
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      type="button"
      src={rightArrow}
      alt="next slide"
    />
  );
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    currentslide: 0,
    slidecount: children.length,
  };
  return (
    <div>
      <Slider {...settings} className="custom-slider">
        {children}
      </Slider>
    </div>
  );
};
