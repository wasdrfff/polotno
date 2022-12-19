import { useState } from "react";
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
  const [itemIndex, setItemIndex] = useState<number>();

  const closeModalSlider = () => {
    setItemIndex(undefined);
  };

  const openModalSlider = (index: number) => {
    setItemIndex(index);
  };
  return (
    <>
      <Carousel
        autoPlay={false}
        height={height}
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
        {items.map((item, index) => {
          return (
            <ImageWrapper key={item.id} onClick={() => openModalSlider(index)}>
              <Image src={item.image.url} />
            </ImageWrapper>
          );
        })}
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
