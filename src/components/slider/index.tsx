import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import leftArrow from "./assets/image/left-arrow.svg";
import rightArrow from "./assets/image/right-arrow.svg";

// const settings = {
//   dots: true,
//   fade: true,
//   infinite: true,
//   speed: 500,
//   nextArrow: <img src={rightArrow} alt="next slide" />,
//   prevArrow: <img src={leftArrow} alt="prev slide" />,
//   currentSlide: 0,
//   slideCount:
// };

type TProps = {
  children: JSX.Element[];
};

export const Custom = ({ children }: TProps) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <img
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      // aria-disabled={currentSlide === 0 ? true : false}
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
      // aria-disabled={currentSlide === slideCount - 1 ? true : false}
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
