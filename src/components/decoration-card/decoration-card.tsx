import {
  ImageWrapper,
  Image,
  LabelWrapper,
  Gradient,
} from "./decoration-card-styled";
import { Text } from "../text";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUiModal, TItem } from "../slider-material-ui";
import { useCallback, useState } from "react";
import { Loader } from "../loader";

type TProps = {
  imageUrl: string;
  title: string;
  isLarge?: boolean;
  items: TItem[];
  name: string;
};

export const DecorationCard = ({
  imageUrl,
  title,
  isLarge,
  items,
  name,
}: TProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModalSlider = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModalSlider = useCallback(() => {
    setIsOpen(true);
  }, []);

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  const variant = isDesktop ? (isLarge ? "h2Web" : "h3Web") : "h2Mob";

  if (!items) return <Loader />;
  return (
    <>
      <ImageWrapper onClick={openModalSlider}>
        <Image src={imageUrl} alt={name} />
        <Gradient />
        <LabelWrapper isLarge={isLarge}>
          <Text variant={variant} textColor="white">
            {title}
          </Text>
        </LabelWrapper>
      </ImageWrapper>

      {isOpen && (
        <SliderMaterialUiModal
          isOpen={isOpen}
          items={items}
          title={title}
          closeModalSlider={closeModalSlider}
        />
      )}
    </>
  );
};
