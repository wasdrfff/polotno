import { useCallback, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Icon } from "../icon";
import {
  Image,
  ImageWrapper,
  Slide,
  ImageCenterWrapper,
  IconWrapper,
  ModalWrapper,
  ModalHeader,
  ModalSlider,
  ModalImage,
} from "./slider-material-ui-styled-new";
import { TItem } from "./types";

type TProps = {
  items: TItem[];
  height?: string | number;
};

export const SliderMaterialUiNew = ({ items, height }: TProps) => {
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
        indicators={false}
        navButtonsAlwaysInvisible
        index={currentIndex}
      >
        {items.map((item, index) => {
          const prevItemIndex = index - 1 >= 0 ? index - 1 : items.length - 1;
          const nextItemIndex = index + 1 <= items.length - 1 ? index + 1 : 0;

          return (
            <Slide key={item.id}>
              <ImageWrapper onClick={() => setCurrentIndex(prevItemIndex)}>
                <Image
                  src={items[prevItemIndex].url}
                  alt={items[prevItemIndex].name}
                />
              </ImageWrapper>
              <ImageCenterWrapper onClick={openModalSlider}>
                <Image src={item.url} alt={item.name} />
              </ImageCenterWrapper>
              <ImageWrapper onClick={() => setCurrentIndex(nextItemIndex)}>
                <Image
                  src={items[nextItemIndex].url}
                  alt={items[nextItemIndex].name}
                />
              </ImageWrapper>
            </Slide>
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
