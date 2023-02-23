import { useCallback, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Icon } from "../icon";
import { theme } from "../../variables";
import {
  ModalHeader,
  Image,
  ImageWrapper,
  ModalImage,
  ModalSlider,
  ModalWrapper,
  IconWrapper,
} from "./slider-material-ui-styled";
import { TItem } from "./types";

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
      {isOpen && (
        <ModalWrapper>
          <ModalHeader>
            <IconWrapper>
              <Icon name="cross" onClick={closeModalSlider} size={40} />
            </IconWrapper>
          </ModalHeader>
          <Carousel
            autoPlay={false}
            height="calc(100vh - 80px)"
            navButtonsAlwaysVisible={true}
            index={currentIndex}
            indicators={false}
            onChange={setCurrentIndex}
          >
            {items.map((item) => {
              return (
                <ModalSlider key={item.id}>
                  <ModalImage src={item.url} />
                </ModalSlider>
              );
            })}
          </Carousel>
        </ModalWrapper>
      )}
    </>
  );
};
