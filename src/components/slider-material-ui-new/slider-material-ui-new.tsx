import { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState<number>();

  const closeModalSlider = () => {
    setItemIndex(undefined);
  };

  const openModalSlider = (index: number) => {
    setItemIndex(index);
  };

  const slides: Array<JSX.Element> = items.map((item, index) => {
    const prevItemIndex = index - 1 >= 0 ? index - 1 : items.length - 1;
    const nextItemIndex = index + 1 <= items.length - 1 ? index + 1 : 0;

    return (
      <Slide key={item.id}>
        <ImageWrapper onClick={() => setCurrentIndex(prevItemIndex)}>
          <Image
            src={items[prevItemIndex].image.url}
            alt={items[prevItemIndex].image.name}
          />
        </ImageWrapper>
        <ImageCenterWrapper onClick={() => openModalSlider(index)}>
          <Image src={item.image.url} alt={item.image.name} />
        </ImageCenterWrapper>
        <ImageWrapper onClick={() => setCurrentIndex(nextItemIndex)}>
          <Image
            src={items[nextItemIndex].image.url}
            alt={items[nextItemIndex].image.name}
          />
        </ImageWrapper>
      </Slide>
    );
  });

  return (
    <>
      <Carousel
        autoPlay={false}
        height={height}
        indicators={false}
        navButtonsAlwaysInvisible
        index={currentIndex}
      >
        {slides}
      </Carousel>
      {itemIndex !== undefined && (
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
            index={itemIndex}
            indicators={false}
          >
            {items.map((item) => {
              return (
                <ModalSlider key={item.id}>
                  <ModalImage src={item.image.url} />
                </ModalSlider>
              );
            })}
          </Carousel>
        </ModalWrapper>
      )}
    </>
  );
};
