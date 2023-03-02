import { useCallback, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { theme } from "../../variables";
import { Image, ImageWrapper } from "./slider-material-ui-styled";
import { TItem } from "./types";
import { SliderMaterialUiModal } from "./slider-material-ui-modal/slider-material-ui-modal";

type TProps = {
  items: TItem[];
  height?: string | number;
};

export const SliderMaterialUi = ({ items, height }: TProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModalSlider = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModalSlider = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Carousel
        autoPlay={false}
        height={height}
        index={currentIndex}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "4px",
            zIndex: "1",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: theme.colors.white,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.colors.mainColor,
          },
        }}
      >
        {items.map((item) => {
          return (
            <ImageWrapper key={item.id} onClick={openModalSlider}>
              <Image src={item.url} />
            </ImageWrapper>
          );
        })}
      </Carousel>

      <SliderMaterialUiModal
        isOpen={isOpen}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        items={items}
        closeModalSlider={closeModalSlider}
      />
    </>
  );
};
