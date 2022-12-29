import { hexToRgba } from "../../utils/hex-to-rgba";
import styled from "styled-components";

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

export const ImageCenterWrapper = styled.div`
  min-width: 540px;
  width: 540px;
  height: 400px;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    height: 440px;
  }
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    min-width: 155px;
    width: 155px;
    height: 135px;
    :hover {
      height: 135px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 540px;
  min-width: 540px;
  height: 400px;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    min-width: 155px;
    width: 155px;
    height: 135px;
  }
`;
export const ModalWrapper = styled.div`
  background-color: ${(props) => hexToRgba(props.theme.colors.textColor, 0.7)};
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
`;
export const ModalSlider = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;
export const ModalImage = styled.img`
  max-width: 100vw;
  object-fit: scale-down;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const IconWrapper = styled.div`
  cursor: pointer;
  padding: 10px;
`;
