import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import leftArrow from "./assets/image/left-arrow.svg";
import rightArrow from "./assets/image/right-arrow.svg";

const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}: any) => <span {...props}>{children}</span>;

const SETTINGS = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  nextArrow: (
    <SlickButtonFix>
      <img src={rightArrow} alt="next slide" />
    </SlickButtonFix>
  ),
  prevArrow: (
    <SlickButtonFix>
      <img src={leftArrow} alt="prev slide" />
    </SlickButtonFix>
  ),
};

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
  // =======
  // export const CustomSlider = ({ children }: Props) => {
  // // >>>>>>> 09a40c0286bb6ee944488823835f3225bdea4d27
  // //   return (
  // //     <div>
  // //       <Slider {...SETTINGS} className="custom-slider">
  // //         {children}
  // //       </Slider>
  // //     </div>
  // //   );
};
