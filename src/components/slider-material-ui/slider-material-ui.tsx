import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Icon } from "../icon";
import {
  IconContainer,
  Image,
  ImageWrapper,
  ModalImage,
  ModalSlider,
  ModalWrapper,
} from "./slider-material-ui-styled";

export type TItem = {
  itemId: string;
  mediaUrl: string;
  metaData: {
    type: string;
    height: number;
    width: number;
    title: string;
    description: string;
    focalPoint: number[];
  };
};

type Props = {
  items: TItem[];
  height?: string | number;
};

export const SliderMaterialUi = ({ items, height }: Props) => {
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [itemIndex, setItemIndex] = useState<number>();

  console.log(itemIndex);

  const closeModalSlider = () => {
    setIsOpenImage(false);
    setItemIndex(undefined);
  };

  const openModalSlider = (index: number) => {
    setItemIndex(index);
    setIsOpenImage(true);
  };
  return (
    <>
      <Carousel autoPlay={false} height={height}>
        {items.map((item, index) => {
          return (
            <ImageWrapper onClick={() => openModalSlider(index)}>
              <Image key={item.itemId} src={item.mediaUrl} />
            </ImageWrapper>
          );
        })}
      </Carousel>
      {isOpenImage && (
        <ModalWrapper>
          <IconContainer>
            <Icon name="cross" onClick={closeModalSlider} size={40} />
          </IconContainer>
          <Carousel
            autoPlay={false}
            height="100vh"
            navButtonsAlwaysVisible={true}
            index={itemIndex}
          >
            {items.map((item) => {
              return (
                <ModalSlider>
                  <ModalImage key={item.itemId} src={item.mediaUrl} />
                </ModalSlider>
              );
            })}
          </Carousel>
        </ModalWrapper>
      )}
    </>
  );
};