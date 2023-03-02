import Carousel from "react-material-ui-carousel";
import { Icon } from "../../../components/icon";
import { TItem } from "../types";
import {
  CustomText,
  IconWrapper,
  ModalHeader,
  ModalImage,
  ModalSlider,
  ModalWrapper,
  TextWrapper,
} from "./slider-material-ui-modal-styled";

type TProps = {
  isOpen: boolean;
  currentIndex?: number | undefined;
  setCurrentIndex?: (index: number | undefined) => void;
  items: TItem[];
  title?: string;
  closeModalSlider: () => void;
};

export const SliderMaterialUiModal = ({
  isOpen,
  currentIndex,
  setCurrentIndex,
  items,
  title,
  closeModalSlider,
}: TProps) => {
  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <ModalHeader>
            <IconWrapper>
              <Icon
                name="cross"
                onClick={closeModalSlider}
                size={40}
                color="white"
              />
            </IconWrapper>
          </ModalHeader>
          <TextWrapper>
            <CustomText variant="h2Mob" textColor="white">
              {title}
            </CustomText>
          </TextWrapper>
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
